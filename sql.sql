-- Drop table

-- DROP TABLE public.debit_note;

CREATE TABLE public.debit_note (
	id uuid NULL,
	title varchar NULL,
	"from" varchar NULL,
	sum numeric(8,2) NULL,
	"createdAt" timestamp NULL,
	"updatedAt" timestamp NULL
);

-- Permissions

ALTER TABLE public.debit_note OWNER TO postgres;
GRANT ALL ON TABLE public.debit_note TO postgres;


-- Drop table

-- DROP TABLE public.files;

CREATE TABLE public.files (
	id uuid NULL,
	"name" varchar NULL,
	ext varchar NULL,
	"documentId" uuid NULL,
	"createdAt" timestamp NULL,
	"updatedAt" timestamp NULL
);
