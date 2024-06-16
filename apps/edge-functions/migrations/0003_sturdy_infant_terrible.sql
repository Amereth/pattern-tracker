CREATE TABLE `events` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
