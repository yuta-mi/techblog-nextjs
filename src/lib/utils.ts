type ClassValue = string | number | boolean | undefined | null | { [key: string]: boolean } | ClassValue[];

export function cn(...inputs: ClassValue[]): string {
  return inputs
    .filter(Boolean)
    .map(input => {
      if (typeof input === 'string') return input;
      if (typeof input === 'object' && input !== null && !Array.isArray(input)) {
        return Object.entries(input)
          .filter(([, value]) => Boolean(value))
          .map(([key]) => key)
          .join(' ');
      }
      if (Array.isArray(input)) return cn(...input);
      return String(input);
    })
    .join(' ')
    .trim();
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("ja-JP", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
} 