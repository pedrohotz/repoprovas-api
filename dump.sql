--
-- PostgreSQL database dump
--

-- Dumped from database version 14.0
-- Dumped by pg_dump version 14.0

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: categorias; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.categorias (
    "Id" integer NOT NULL,
    "Name" character varying(30) NOT NULL
);


ALTER TABLE public.categorias OWNER TO postgres;

--
-- Name: categorias_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."categorias_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."categorias_Id_seq" OWNER TO postgres;

--
-- Name: categorias_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."categorias_Id_seq" OWNED BY public.categorias."Id";


--
-- Name: disciplinas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.disciplinas (
    "Id" integer NOT NULL,
    "Name" character varying(30) NOT NULL,
    periodo integer
);


ALTER TABLE public.disciplinas OWNER TO postgres;

--
-- Name: disciplinas_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."disciplinas_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."disciplinas_Id_seq" OWNER TO postgres;

--
-- Name: disciplinas_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."disciplinas_Id_seq" OWNED BY public.disciplinas."Id";


--
-- Name: prof_disc; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.prof_disc (
    "Id" integer NOT NULL,
    "DisciplinaId" integer NOT NULL,
    "ProfessorId" integer NOT NULL
);


ALTER TABLE public.prof_disc OWNER TO postgres;

--
-- Name: prof_disc_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."prof_disc_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."prof_disc_Id_seq" OWNER TO postgres;

--
-- Name: prof_disc_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."prof_disc_Id_seq" OWNED BY public.prof_disc."Id";


--
-- Name: professores; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.professores (
    "Id" integer NOT NULL,
    "Name" character varying(30) NOT NULL
);


ALTER TABLE public.professores OWNER TO postgres;

--
-- Name: professores_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."professores_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."professores_Id_seq" OWNER TO postgres;

--
-- Name: professores_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."professores_Id_seq" OWNED BY public.professores."Id";


--
-- Name: provas; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.provas (
    "Id" integer NOT NULL,
    "Name" character varying(50) NOT NULL,
    "CategoryId" integer NOT NULL,
    "Prof_DiscId" integer NOT NULL,
    "Link" character varying(100) NOT NULL
);


ALTER TABLE public.provas OWNER TO postgres;

--
-- Name: provas_Id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public."provas_Id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public."provas_Id_seq" OWNER TO postgres;

--
-- Name: provas_Id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public."provas_Id_seq" OWNED BY public.provas."Id";


--
-- Name: categorias Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias ALTER COLUMN "Id" SET DEFAULT nextval('public."categorias_Id_seq"'::regclass);


--
-- Name: disciplinas Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplinas ALTER COLUMN "Id" SET DEFAULT nextval('public."disciplinas_Id_seq"'::regclass);


--
-- Name: prof_disc Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof_disc ALTER COLUMN "Id" SET DEFAULT nextval('public."prof_disc_Id_seq"'::regclass);


--
-- Name: professores Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professores ALTER COLUMN "Id" SET DEFAULT nextval('public."professores_Id_seq"'::regclass);


--
-- Name: provas Id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas ALTER COLUMN "Id" SET DEFAULT nextval('public."provas_Id_seq"'::regclass);


--
-- Data for Name: categorias; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.categorias ("Id", "Name") FROM stdin;
1	P1
2	P2
3	P3
4	2ch
5	Outras
\.


--
-- Data for Name: disciplinas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.disciplinas ("Id", "Name", periodo) FROM stdin;
1	Fisiologia	1
2	Embriologia	1
3	Circuitos	3
4	Algoritimos	2
\.


--
-- Data for Name: prof_disc; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.prof_disc ("Id", "DisciplinaId", "ProfessorId") FROM stdin;
1	3	1
2	4	3
3	4	1
\.


--
-- Data for Name: professores; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.professores ("Id", "Name") FROM stdin;
1	Jose da silva
2	Carlos de Almeida
3	Winglerson Pinto Junior
\.


--
-- Data for Name: provas; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.provas ("Id", "Name", "CategoryId", "Prof_DiscId", "Link") FROM stdin;
2	Prova de teste	3	1	linkdetesteste.com
3	Prova de teste2	1	1	linkdetesteste.com
4	Prova de teste3	1	1	linkdetesteste.com
5	Prova de teste4	1	1	linkdetesteste.com
6	Testando link	2	1	https://www.google.com.br
7	Testando prova	3	2	https://www.google.com.br
8	Testando prova	3	3	https://www.google.com.br
9	Testando prova2	3	3	https://www.google.com.br
10	teste	2	2	https://www.youtube.com
\.


--
-- Name: categorias_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."categorias_Id_seq"', 5, true);


--
-- Name: disciplinas_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."disciplinas_Id_seq"', 4, true);


--
-- Name: prof_disc_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."prof_disc_Id_seq"', 3, true);


--
-- Name: professores_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."professores_Id_seq"', 3, true);


--
-- Name: provas_Id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public."provas_Id_seq"', 10, true);


--
-- Name: categorias Categorias_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT "Categorias_pk" PRIMARY KEY ("Id");


--
-- Name: disciplinas Disciplinas_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.disciplinas
    ADD CONSTRAINT "Disciplinas_pk" PRIMARY KEY ("Id");


--
-- Name: prof_disc Prof_Disc_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof_disc
    ADD CONSTRAINT "Prof_Disc_pk" PRIMARY KEY ("Id");


--
-- Name: professores Professores_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.professores
    ADD CONSTRAINT "Professores_pk" PRIMARY KEY ("Id");


--
-- Name: provas Provas_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas
    ADD CONSTRAINT "Provas_pk" PRIMARY KEY ("Id");


--
-- Name: prof_disc Prof_Disc_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof_disc
    ADD CONSTRAINT "Prof_Disc_fk0" FOREIGN KEY ("DisciplinaId") REFERENCES public.disciplinas("Id");


--
-- Name: prof_disc Prof_Disc_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.prof_disc
    ADD CONSTRAINT "Prof_Disc_fk1" FOREIGN KEY ("ProfessorId") REFERENCES public.professores("Id");


--
-- Name: provas Provas_fk0; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas
    ADD CONSTRAINT "Provas_fk0" FOREIGN KEY ("CategoryId") REFERENCES public.categorias("Id");


--
-- Name: provas Provas_fk1; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.provas
    ADD CONSTRAINT "Provas_fk1" FOREIGN KEY ("Prof_DiscId") REFERENCES public.prof_disc("Id");


--
-- PostgreSQL database dump complete
--

