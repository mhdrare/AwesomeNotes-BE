-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jul 07, 2019 at 04:27 PM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `awesomenotes`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `id` int(5) NOT NULL,
  `categoryName` varchar(20) NOT NULL,
  `url_image` varchar(155) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`id`, `categoryName`, `url_image`) VALUES
(1, 'Hobby', 'https://img.icons8.com/ios/100/000000/kite-filled.png'),
(2, 'Work', 'https://img.icons8.com/material-sharp/96/000000/home-office.png'),
(3, 'Learn', 'https://img.icons8.com/ios/100/000000/book-filled.png'),
(4, 'Personal', 'https://img.icons8.com/ios/100/000000/siri-filled.png');

-- --------------------------------------------------------

--
-- Table structure for table `notes`
--

CREATE TABLE `notes` (
  `id` int(5) NOT NULL,
  `title` varchar(50) NOT NULL,
  `description` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT current_timestamp(),
  `category` int(5) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `notes`
--

INSERT INTO `notes` (`id`, `title`, `description`, `time`, `category`) VALUES
(2, 'Reading', 'If your idea of a fun Friday night is cozying up with a book, you’re certainly not alone.  Reading is enjoyed worldwide; it’s accessible due to the fact that it’s inexpensive (or free), and it allows people to explore new and exciting worlds, and expand their knowledge.', '2019-07-07 08:35:07', 1),
(4, 'Traveling\n\n', 'Whether it’s a trip across the ocean or exploring the next town over, traveling is an exciting hobby virtually anyone can participate in. From the planning stage to the trip itself, traveling gives folks something to look forward to, along with a brief escape from reality.', '2019-07-07 10:54:49', 1),
(5, 'Fishing\n\n', 'If you need a break from the daily grind, unwind with a fishing trip. Whether you’re fishing for food or just for fun, the hobby is a great way to relax and enjoy nature. There are many different types of fishing, making the hobby accessible in most places. If you’re looking for a challenge, try ice fishing or fishing on a stand up paddle board.', '2019-07-07 10:41:11', 1),
(6, 'Crafts\n\n', 'Creativity is universal, and so is the art of crafting. There are many avenues crafters can take, from knitting and crochet to paper crafts and beading. The internet has opened up a whole new world to craft enthusiasts everywhere; if supplies can’t be found locally, they can easily be found online. Craft websites and message boards offer inspiration when creativity is running low.', '2019-07-07 10:41:31', 1),
(8, 'Music\n\n', 'Played, heard, and loved worldwide, music brings people together. Whether it’s listening at home or taking in a concert, music can be enjoyed anywhere.', '2019-07-07 10:42:32', 1),
(9, 'Video Games\n\n', 'Sure, video games get a bad rap, but let’s face it… people love them! There are games to suit virtually any personality and preference. Online gaming allows gamers to connect with others online.', '2019-07-07 10:43:22', 1),
(10, 'How To Learn Something', 'Learning can be broken down into short-term and long-term learning.  If you don’t necessarily want to embark on a big endeavor, your brain can still benefit from learning smaller bits of information on a daily basis.  Here are some ways to do that.', '2019-07-07 11:03:47', 3),
(11, 'Learn a New Language with Duolingo\n\n', 'Duolingo is an app which makes it easy to learn a new language thanks to its interactive method and how it breaks down lessons into small chunks. There are dozens of languages to choose from and the app is free to use!', '2019-07-07 10:45:58', 3),
(12, 'Learn Leadership Skills\n\n', 'Today’s top companies aren’t just looking for skills like coding.  They want people with soft skills like leadership, team management, creativity, and decision-making.', '2019-07-07 10:47:14', 3),
(13, 'Things to do in Yogyakarta\n\n', 'Take a look at the greatness of the 9th century Mahayana Buddhist temple, see the beautiful sunrise from the top of Borobudur or watch the celebration of Waisak filled with light lanterns in Borobudur. Candi Borobudur decorated with 2672 relief panels and 504 Buddha Statues, unfortunately, some of these panels and statues were damaged by natural disasters. However the government decided not to have reconstruction the damage because it could harm the historical value of Candi Borobudur.', '2019-07-07 10:50:18', 4),
(14, 'Mount Merapi and Mount Merbabu\n\n', 'The twin volcanoes of Merapi and Merbabu towers over the city of Yogyakarta like guardians, with a little town called Selo in between them. Both volcanoes are climbable with Merapi being a shorter but steeper climb and Merbabu a more manageable incline but longer hike. The views at the top are amazing, with sunlight streaming through a sea of clouds.', '2019-07-07 10:59:49', 4),
(15, 'Daily Standup', 'Today, we have first time for daily standup with new team. Nothing special but its okay', '2019-07-07 10:56:46', 2),
(16, 'Nike Air Jordan', 'Yasss!', '2019-07-07 10:59:08', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `notes`
--
ALTER TABLE `notes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `category` (`category`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `notes`
--
ALTER TABLE `notes`
  MODIFY `id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `notes`
--
ALTER TABLE `notes`
  ADD CONSTRAINT `notes_ibfk_1` FOREIGN KEY (`category`) REFERENCES `categories` (`id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
