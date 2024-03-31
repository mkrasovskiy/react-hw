import Button from '@mui/material/Button';

export default function BasicButtons({ onClick }) {
  return (
      <Button variant="contained" onClick={onClick}>Добавить</Button>
  );
}