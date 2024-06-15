-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Waktu pembuatan: 15 Jun 2024 pada 19.57
-- Versi server: 10.4.32-MariaDB
-- Versi PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `datarj`
--

-- --------------------------------------------------------

--
-- Struktur dari tabel `customer_reviews`
--

CREATE TABLE `customer_reviews` (
  `id` int(11) NOT NULL,
  `imageUrl` varchar(255) NOT NULL,
  `description` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `customer_reviews`
--

INSERT INTO `customer_reviews` (`id`, `imageUrl`, `description`) VALUES
(1, '/images/96520eb135ef617addbf63c51ba8649d.jpg', '');

-- --------------------------------------------------------

--
-- Struktur dari tabel `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `image` varchar(255) NOT NULL,
  `url` varchar(255) NOT NULL,
  `harga` decimal(10,2) NOT NULL,
  `category` enum('rujak','ubi') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `products`
--

INSERT INTO `products` (`id`, `name`, `image`, `url`, `harga`, `category`) VALUES
(1, 'Rujak Klasik (250 g)', '53ab2d5379dc52658a3da14bb199f626.JPG', '/images/53ab2d5379dc52658a3da14bb199f626.JPG', 15000.00, 'rujak'),
(2, 'Rujak Klasik (430g)', '4cb370ec94a2de38a596ba807c4ba2a3.JPG', '/images/4cb370ec94a2de38a596ba807c4ba2a3.JPG', 25000.00, 'rujak'),
(3, 'Rujak Klasik (500 g)', 'aec1cbc228dcd1f446a053c5889be0a0.JPG', '/images/aec1cbc228dcd1f446a053c5889be0a0.JPG', 30000.00, 'rujak'),
(4, 'Ubi Ungu (150g)', 'a1327c4cffd7a17d02ae9d6276022db4.jpeg', '/images/a1327c4cffd7a17d02ae9d6276022db4.jpeg', 6000.00, 'ubi'),
(5, 'Ubi Ungu (300g)', '117f54beb76ceb1d73a0a6b430d709c0.JPG', '/images/117f54beb76ceb1d73a0a6b430d709c0.JPG', 10000.00, 'ubi');

-- --------------------------------------------------------

--
-- Struktur dari tabel `promos`
--

CREATE TABLE `promos` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `description` text NOT NULL,
  `imageUrl` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `promos`
--

INSERT INTO `promos` (`id`, `title`, `description`, `imageUrl`) VALUES
(1, 'Promo 1', 'Dapatkan harga khusus untuk berbagai macam acara :\r\n• Jum\'at berkah\r\n• Arisan\r\n• Pernikahan\r\n• Seminar\r\n• Tujuh bulanan\r\n• dan lain-lain.\r\nKami siap menyediakan rujak klasik dan bubur ubi ungu yang spesial.', '/images/b1d3b9dc62bbc4ba6ac2423f6daf9103.png');

-- --------------------------------------------------------

--
-- Struktur dari tabel `reviews`
--

CREATE TABLE `reviews` (
  `id` int(11) NOT NULL,
  `star_rating` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `no_telepon` varchar(15) NOT NULL,
  `comments` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `reviews`
--

INSERT INTO `reviews` (`id`, `star_rating`, `name`, `no_telepon`, `comments`) VALUES
(1, 5, 'Max Verstappen', '0810314444', 'This Rujak Is very good and so spicy');

-- --------------------------------------------------------

--
-- Struktur dari tabel `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data untuk tabel `users`
--

INSERT INTO `users` (`id`, `email`, `password`) VALUES
(1, 'admin@gmail.com', '$2b$10$ZJcKaAxIrQeq0Mi.Eff/P.IFB3E76dirIrgsePbZ80xCZpbj6U0IS');

--
-- Indexes for dumped tables
--

--
-- Indeks untuk tabel `customer_reviews`
--
ALTER TABLE `customer_reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `promos`
--
ALTER TABLE `promos`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`id`);

--
-- Indeks untuk tabel `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT untuk tabel yang dibuang
--

--
-- AUTO_INCREMENT untuk tabel `customer_reviews`
--
ALTER TABLE `customer_reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT untuk tabel `promos`
--
ALTER TABLE `promos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `reviews`
--
ALTER TABLE `reviews`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT untuk tabel `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
