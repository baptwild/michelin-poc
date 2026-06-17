import styles from "./Button.module.css";

type ButtonProps = {
  variant?: "yellow" | "primary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `${styles.button} ${styles[variant]} ${styles[size]} ${className}`;
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}