PRAGMA foreign_keys=OFF;--> statement-breakpoint
CREATE TABLE `__new_events` (
	`id` integer PRIMARY KEY NOT NULL,
	`name` text,
	`created_at` text DEFAULT (current_timestamp) NOT NULL
);
--> statement-breakpoint
INSERT INTO `__new_events`("id", "name", "created_at") SELECT "id", "name", "created_at" FROM `events`;--> statement-breakpoint
DROP TABLE `events`;--> statement-breakpoint
ALTER TABLE `__new_events` RENAME TO `events`;--> statement-breakpoint
PRAGMA foreign_keys=ON;--> statement-breakpoint
CREATE TABLE `__new_occurrences` (
	`id` integer PRIMARY KEY NOT NULL,
	`event_id` integer,
	`created_at` text DEFAULT (CURRENT_TIMESTAMP),
	FOREIGN KEY (`event_id`) REFERENCES `events`(`id`) ON UPDATE no action ON DELETE cascade
);
--> statement-breakpoint
INSERT INTO `__new_occurrences`("id", "event_id", "created_at") SELECT "id", "event_id", "created_at" FROM `occurrences`;--> statement-breakpoint
DROP TABLE `occurrences`;--> statement-breakpoint
ALTER TABLE `__new_occurrences` RENAME TO `occurrences`;