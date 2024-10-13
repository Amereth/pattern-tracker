ALTER TABLE `events` ALTER COLUMN "name" TO "name" text NOT NULL;--> statement-breakpoint
ALTER TABLE `events` ALTER COLUMN "created_at" TO "created_at" text DEFAULT (current_timestamp);--> statement-breakpoint
ALTER TABLE `occurrences` ALTER COLUMN "created_at" TO "created_at" text DEFAULT (current_timestamp);--> statement-breakpoint
ALTER TABLE `occurrences` ADD `date` text NOT NULL;