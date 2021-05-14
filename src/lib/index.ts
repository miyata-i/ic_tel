export const stopPropagation = (event: React.MouseEvent) => {
  event.stopPropagation();
};

export function zeroPadding(length: number, string: string) {
  return (target: number | string) => {
    return (Array(length + 1).join(string) + target).slice(-length);
  };
}