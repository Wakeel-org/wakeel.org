import { collection, getDocs, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

export const getTeamMembers = async () => {
  const q = query(collection(db, 'team_members'), orderBy('order', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getCompanyTimeline = async () => {
  const q = query(collection(db, 'company_timeline'), orderBy('order', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
};

export const getFaqs = async () => {
  const q = query(collection(db, 'website_faqs'), orderBy('order', 'asc'));
  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));
}; 