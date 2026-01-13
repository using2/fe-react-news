const today = new Date();

// "년. 월. 일. 요일"로 string으로 반환합니다.
export const formatted = today.toLocaleDateString('ko-KR', {
  weekday: 'long',
  year: 'numeric',
  month: '2-digit',
  day: '2-digit',
});
