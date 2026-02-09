"use client";

import { useState } from "react";
import { logoutAction } from "../actions/auth";
import styles from "./dashboard.module.css";

export default function UserMenu({ email }: { email: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.userMenu}>
      <button
        className={styles.userButton}
        onClick={() => setOpen(!open)}
      >
        👤 {email}
        <span className={styles.arrow}>▾</span>
      </button>

      {open && (
        <div className={styles.dropdown}>
          <form action={logoutAction}>
            <button type="submit" className={styles.logout}>
              Sair
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
