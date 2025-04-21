'use client'

import Link from "next/link";
import styles from './styles.module.css';
import { usePathname } from "next/navigation";



interface Props { 
  name: string;
  href: string;
}



export const ActiveLink = ({name, href}: Props) => {
  const namePath = usePathname();
  //console.log(namePath);
  return (
    <Link 
      key={name } 
      className={`${styles.link} ${href === namePath && styles.active }`} 
      href={href}>
            {name}
    </Link>
  )
}
