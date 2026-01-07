import express, { Request, Response } from 'express';
import path from 'path';

const app = express();
const port = 3000;

// Middleware untuk folder public (biar gambar & css terbaca)
app.use(express.static(path.join(__dirname, '../public')));

app.get('/', (req: Request, res: Response) => {
  // Mengirim file index.html yang ada di folder public
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.listen(port, () => {
  console.log(`🚀 Portfolio running di http://localhost:${port}`);
});