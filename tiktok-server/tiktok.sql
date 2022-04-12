-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 12, 2022 at 12:45 PM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tiktok`
--

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_avatar` text NOT NULL,
  `password` varchar(255) NOT NULL,
  `nikname` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `following` int(11) DEFAULT 0,
  `follower` int(11) DEFAULT 0,
  `favorite` int(11) DEFAULT 0,
  `status` int(11) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `user_name`, `user_avatar`, `password`, `nikname`, `description`, `following`, `follower`, `favorite`, `status`) VALUES
(1, 'vietnt', 'https://prnt.sc/RP3aUXgogyrF', '123456', 'Thanh Viet', 'Fullstack developer', 0, 0, 0, 1);

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `owner_id` int(11) NOT NULL,
  `user_name` varchar(255) NOT NULL,
  `user_avatar` text NOT NULL,
  `title` text DEFAULT NULL,
  `comment_count` int(11) DEFAULT 0,
  `favorite_count` int(11) DEFAULT 0,
  `share_count` int(11) DEFAULT 0,
  `music_id` int(11) DEFAULT NULL,
  `video_status` decimal(1,0) DEFAULT 1,
  `video_src` text NOT NULL,
  `createdAt` date NOT NULL,
  `updatedAt` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`id`, `owner_id`, `user_name`, `user_avatar`, `title`, `comment_count`, `favorite_count`, `share_count`, `music_id`, `video_status`, `video_src`, `createdAt`, `updatedAt`) VALUES
(1, 1, 'vietnt', 'x', 'abc', 0, 0, 0, 1, '1', 'https://v16-webapp.tiktok.com/56edf0acfeb0012dba2c28be32285c52/6255a642/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/0946ebe191b14b47a8a186255b2d96d6/?a=1988&br=2068&bt=1034&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8Z2bThwe2N8Dhml7Gb&l=202204121018020102450241120E09627A&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=amw1ajw6ZjR2PDMzZjgzM0ApOzo6PDY2M2Q6NzllNWkzZWdqLzVucjRnMDZgLS1kL2NzczI0LzJhXzUxLmJjMzQyMjE6Yw%3D%3D&vl=&vr=', '2022-04-01', '2022-04-01'),
(2, 1, 'vietnt', 'x', 'bcd', 0, 0, 0, 1, '1', 'https://v16-webapp.tiktok.com/ee1a4ffea1419b34fb5c09be9b682792/6255a659/video/tos/useast2a/tos-useast2a-pve-0037-aiso/428c040509e84e6f90be8539ab9678ae/?a=1988&br=3882&bt=1941&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZybThwe2NctBml7Gb&l=202204121018180102450430261B0972ED&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=ajpqNWc6Zjc1PDMzZjgzM0ApOGRnODhoZ2Q7Nzo8ZmlnZWdpNGgzcjQwXzVgLS1kL2NzczYtXzRjMDItMy1eMTMuNl86Yw%3D%3D&vl=&vr=', '2022-04-01', '2022-04-01'),
(3, 1, 'vietnt', 'x', 'def', 0, 0, 0, 1, '2', 'https://v16-webapp.tiktok.com/3c60f02124344b8a5cddf2a769cd5e1a/624b15ff/video/tos/useast2a/tos-useast2a-pve-0037-aiso/fb3e9e22a15743d3bda86fced4cb9209/?a=1988&br=1892&bt=946&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThXDTqDXq&l=2022040409595201025100418512352567&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzlsaDg6Zmo1OzMzZjgzM0ApaDQ6NjhpaTs0NzkzNWU7PGc2YGBpcjRvay5gLS1kL2Nzc2EyYzUxYjQzMTIzYjUzMC86Yw%3D%3D&vl=&vr=', '2022-04-01', '2022-04-01'),
(4, 1, 'vietnt', 'x', 'rrr', 0, 0, 0, 1, '2', 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4', '2022-04-04', '2022-04-04'),
(5, 1, 'vietnt', 'x', 'ww3', 0, 0, 0, 1, '2', 'https://v16-webapp.tiktok.com/867a03c8a8b3ce3c915afccd432bff28/624d83b9/video/tos/useast2a/tos-useast2a-pve-0037-aiso/a98a86c2d611413286e405ef8c5af7c4/?a=1988&br=3918&bt=1959&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3LGnz7ThNaySDXq&l=202204060612240102450020542651F914&lr=tiktok&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2kzOTo6ZmxlPDMzZjgzM0ApZWk8O2VkaGVmN2c4N2g2ZGdma2NwcjRfZjJgLS1kL2NzczNgNV8vLWBjYTFiX2IuY146Yw%3D%3D&vl=&vr=', '2022-04-04', '2022-04-04'),
(6, 1, 'vietnt', 'x', 'abc 2', 0, 0, 0, 1, '1', 'https://v16-webapp.tiktok.com/f2af2642e781a2038e4464d99b13c0f8/6255a655/video/tos/useast2a/tos-useast2a-pve-0037c001-aiso/cd21b6feb1834d16b61daea081ca5889/?a=1988&br=2300&bt=1150&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6Hk_Myq8ZybThwe2NctBml7Gb&l=202204121018180102450430261B0972ED&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=11&rc=Mzg4czw6Zmw0PDMzZjgzM0ApNjtpNmUzOTs6N2VnNjpnNmctbS5ocjRfbjNgLS1kL2NzczReLy4wNGNgMl8wXjBgY2A6Yw%3D%3D&vl=&vr=', '2022-04-07', '2022-04-07');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
