"use client";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "@/app/lib/firebase";
import store from "../lib/store";
import Container from "../components/ui/Container";
import Registration from "../components/ui/Registration";
import UserInfo from "../components/ui/UserInfo";

export default function ProfilePage() {
  const { currentUser, getUserInfo } = store();
  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      getUserInfo(user?.uid);
    });
    return () => {
      unSub();
    };
  }, [getUserInfo]);
  return (
    <Container>
      {currentUser ? <UserInfo currentUser={currentUser} /> : <Registration />}
    </Container>
  );
}
