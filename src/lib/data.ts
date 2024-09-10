export function generateUsers(numOfUsers: number) {
  return Array.from({ length: numOfUsers }, (_, i) => ({
    fallbackText: 'US',
    userName: `user${i}`,
    imgUrl: `https://picsum.photos/seed/${i}/200/200`,
  }));
}
