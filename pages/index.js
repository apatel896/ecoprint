import React from "react";
import styles from "@/styles/Page.module.css";
import { Button } from "@mui/material";
import { styled } from "@mui/system";
import  { useRouter } from "next/router";
import { useAuthContext } from "@/components/layout.js";

const GradientButton = styled(Button)`
  background: linear-gradient(45deg, #1b4e50 30%, #1b4e50 90%);
  border-radius: 3px;
  border: 0;
  color: white;
  height: 48px;
  padding: 0 30px;

`;

export default function Page() {
  const user = useAuthContext;
  const router = useRouter();
  return (
    <div className={styles.container}>

        <GradientButton onClick={() => router.push('/signin')}className={styles.btn} variant="contained">Sign In/Up</GradientButton>


        <h1 className={styles.titly}style={{padding:0, margin:0}}>EcoPrint</h1>
    </div>


   
  );
}

