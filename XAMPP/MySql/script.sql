-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 23, 2022 at 07:52 PM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 8.1.6

CREATE DATABASE api;

USE api;

CREATE TABLE `petition` (
  `id` int(11) NOT NULL,
  `fecha` date NOT NULL,
  `metodoConsultado` varchar(100) NOT NULL,
  `datos` mediumtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

ALTER TABLE `petition`
  ADD PRIMARY KEY (`id`);

ALTER TABLE `petition`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;
COMMIT;
