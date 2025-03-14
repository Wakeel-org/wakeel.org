import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import Layout from '../src/components/Layout';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  FacebookAuthProvider,
  signInWithPopup,
  updateProfile,
  setPersistence,
  browserLocalPersistence
} from 'firebase/auth';
import { db, storage } from '../src/config/firebase';
import { doc, setDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Link from 'next/link';

const Auth = () => {
  const router = useRouter();
  const { plan } = router.query;
  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [userRole, setUserRole] = useState('student');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [gender, setGender] = useState('');
  const [dob, setDob] = useState('');
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageURL, setProfileImageURL] = useState('');
  const fileInputRef = useRef(null);
  const auth = getAuth();

  // This will toggle between sign in and sign up forms
  const toggleAuthMode = () => setIsSignIn(!isSignIn);

  // Handle profile image selection
  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      setProfileImage(file);
      
      // Create a preview URL
      const reader = new FileReader();
      reader.onload = () => {
        setProfileImageURL(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Trigger file input click
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // Upload profile image to Firebase Storage
  const uploadProfileImage = async (userId) => {
    if (!profileImage) return null;
    
    const storageRef = ref(storage, `profile_images/${userId}`);
    await uploadBytes(storageRef, profileImage);
    return getDownloadURL(storageRef);
  };

  // Save user data to Firestore
  const saveUserToFirestore = async (userId, userData) => {
    try {
      await setDoc(doc(db, "users", userId), {
        ...userData,
        createdAt: new Date(),
        notes: [],
        searches: [],
        plan: plan || 'free'
      });
    } catch (error) {
      console.error("Error saving user data:", error);
      throw new Error("Failed to save user data");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Always set persistence to LOCAL before authentication
      await setPersistence(auth, browserLocalPersistence);
      
      if (isSignIn) {
        // Handle Sign In
        await signInWithEmailAndPassword(auth, email, password);
        // Navigate to dashboard or homepage after successful login
        router.push('/dashboard');
      } else {
        // Handle Sign Up
        if (password !== confirmPassword) {
          throw new Error('Passwords do not match');
        }
        
        // Create user account
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        
        // Upload profile image if selected
        let photoURL = null;
        if (profileImage) {
          photoURL = await uploadProfileImage(user.uid);
        }
        
        // Update profile with display name and photo URL
        await updateProfile(user, { 
          displayName, 
          photoURL: photoURL || ''
        });
        
        // Save additional user data to Firestore
        await saveUserToFirestore(user.uid, {
          email,
          displayName,
          role: userRole,
          gender: gender || null,
          dob: dob || null,
          photoURL: photoURL || null,
        });
        
        // Navigate to dashboard after successful registration
        router.push('/dashboard');
      }
    } catch (error) {
      console.error('Authentication error:', error);
      setError(error.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  const handleSocialSignIn = async (provider) => {
    setError('');
    setLoading(true);
    
    try {
      // Always set persistence to LOCAL before authentication
      await setPersistence(auth, browserLocalPersistence);
      
      const result = await signInWithPopup(auth, provider);
      
      // Check if user already exists in Firestore
      const userDoc = await doc(db, 'users', result.user.uid);
      
      // If new social login, save basic profile info to Firestore
      await setDoc(userDoc, {
        email: result.user.email,
        displayName: result.user.displayName || '',
        photoURL: result.user.photoURL || null,
        role: 'student', // Default role for social sign-ins
        createdAt: new Date(),
        lastLogin: new Date()
      }, { merge: true }); // Use merge to avoid overwriting existing data
      
      // Navigate to dashboard after successful authentication
      router.push('/dashboard');
    } catch (error) {
      console.error('Social authentication error:', error);
      setError(error.message || 'An error occurred during authentication');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignIn = () => {
    const provider = new GoogleAuthProvider();
    handleSocialSignIn(provider);
  };

  const handleFacebookSignIn = () => {
    const provider = new FacebookAuthProvider();
    handleSocialSignIn(provider);
  };

  return (
    <Layout>
      <div className="max-w-md mx-auto my-16 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            {isSignIn ? 'Sign In' : 'Create Account'}
          </h1>
          {plan && (
            <div className="mt-2 text-blue-600 dark:text-blue-400">
              Selected plan: <span className="font-semibold capitalize">{plan}</span>
            </div>
          )}
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
            {error}
          </div>
        )}

        {/* Social Sign In Buttons */}
        <div className="mb-6 space-y-3">
          <button
            onClick={handleGoogleSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center py-2.5 px-4 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"
              />
            </svg>
            <span className="text-gray-700 dark:text-gray-300 font-medium">
              Continue with Google
            </span>
          </button>
          
          <button
            onClick={handleFacebookSignIn}
            disabled={loading}
            className="w-full flex items-center justify-center py-2.5 px-4 bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <svg className="w-5 h-5 mr-2 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.007 3H3.993A.993.993 0 003 3.993v16.014c0 .548.445.993.993.993h8.621v-6.971h-2.346v-2.717h2.346V9.31c0-2.325 1.42-3.591 3.494-3.591.993 0 1.847.074 2.096.107v2.43h-1.438c-1.128 0-1.346.536-1.346 1.322v1.734h2.69l-.35 2.717h-2.34V21h4.587a.993.993 0 00.993-.993V3.993A.993.993 0 0020.007 3z" />
            </svg>
            <span className="text-white font-medium">
              Continue with Facebook
            </span>
          </button>
        </div>

        <div className="relative mb-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300 dark:border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white dark:bg-gray-800 text-gray-500 dark:text-gray-400">
              Or continue with email
            </span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
            />
          </div>

          {!isSignIn && (
            <>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Confirm Password
                </label>
                <input
                  id="confirmPassword"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              {/* Profile Image Upload */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Profile Image
                </label>
                <div className="flex items-center">
                  <div 
                    onClick={handleImageClick}
                    className="w-24 h-24 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center cursor-pointer overflow-hidden border-2 border-dashed border-gray-300 dark:border-gray-600 hover:border-blue-500 dark:hover:border-blue-400"
                  >
                    {profileImageURL ? (
                      <img 
                        src={profileImageURL} 
                        alt="Profile preview" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                      </svg>
                    )}
                  </div>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                  />
                  <div className="ml-4 flex-1">
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Click to upload a profile image
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                      JPG, PNG or GIF. Max size 2MB
                    </p>
                  </div>
                </div>
              </div>
              
              <div>
                <label htmlFor="displayName" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Full Name
                </label>
                <input
                  id="displayName"
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Gender
                  </label>
                  <select
                    id="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="dob" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Date of Birth
                  </label>
                  <input
                    id="dob"
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="userRole" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  I am a
                </label>
                <select
                  id="userRole"
                  value={userRole}
                  onChange={(e) => setUserRole(e.target.value)}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-blue-500 focus:border-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                >
                  <option value="student">Law Student</option>
                  <option value="lawyer">Lawyer</option>
                  <option value="judge">Judge</option>
                  <option value="paralegal">Paralegal</option>
                  <option value="academic">Academic</option>
                  <option value="other">Other Legal Professional</option>
                </select>
              </div>
            </>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing...' : isSignIn ? 'Sign In' : 'Sign Up'}
          </button>
        </form>

        <div className="mt-4 text-center">
          <button
            onClick={toggleAuthMode}
            className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
          >
            {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
          </button>
        </div>

        {isSignIn && (
          <div className="mt-2 text-center">
            <Link href="/forgot-password" className="text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300">
              Forgot your password?
            </Link>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Auth; 