PGDMP      "                 }            CrocheComGraca    17.4    17.4     7           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false            8           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false            9           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false            :           1262    16444    CrocheComGraca    DATABASE     v   CREATE DATABASE "CrocheComGraca" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'pt-BR';
     DROP DATABASE "CrocheComGraca";
                     postgres    false            �            1259    16665 
   pagamentos    TABLE     l   CREATE TABLE public.pagamentos (
    id integer NOT NULL,
    cpf character varying,
    valortotal real
);
    DROP TABLE public.pagamentos;
       public         heap r       postgres    false            �            1259    16664    pagamentos_id_seq    SEQUENCE     �   CREATE SEQUENCE public.pagamentos_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 (   DROP SEQUENCE public.pagamentos_id_seq;
       public               postgres    false    220            ;           0    0    pagamentos_id_seq    SEQUENCE OWNED BY     G   ALTER SEQUENCE public.pagamentos_id_seq OWNED BY public.pagamentos.id;
          public               postgres    false    219            �            1259    16625    roupas    TABLE     T   CREATE TABLE public.roupas (
    id integer NOT NULL,
    nome character varying
);
    DROP TABLE public.roupas;
       public         heap r       postgres    false            �            1259    16632    tamanhos    TABLE     �   CREATE TABLE public.tamanhos (
    id_roupa integer,
    id integer NOT NULL,
    nome character varying,
    tamanho character varying,
    preco real
);
    DROP TABLE public.tamanhos;
       public         heap r       postgres    false            �            1259    16683    vendas    TABLE     �   CREATE TABLE public.vendas (
    id integer NOT NULL,
    cpf character varying,
    descricao character varying,
    precototal real,
    datacompra date
);
    DROP TABLE public.vendas;
       public         heap r       postgres    false            �            1259    16682    vendas_id_seq    SEQUENCE     �   CREATE SEQUENCE public.vendas_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 $   DROP SEQUENCE public.vendas_id_seq;
       public               postgres    false    222            <           0    0    vendas_id_seq    SEQUENCE OWNED BY     ?   ALTER SEQUENCE public.vendas_id_seq OWNED BY public.vendas.id;
          public               postgres    false    221            �           2604    16668    pagamentos id    DEFAULT     n   ALTER TABLE ONLY public.pagamentos ALTER COLUMN id SET DEFAULT nextval('public.pagamentos_id_seq'::regclass);
 <   ALTER TABLE public.pagamentos ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    219    220    220            �           2604    16686 	   vendas id    DEFAULT     f   ALTER TABLE ONLY public.vendas ALTER COLUMN id SET DEFAULT nextval('public.vendas_id_seq'::regclass);
 8   ALTER TABLE public.vendas ALTER COLUMN id DROP DEFAULT;
       public               postgres    false    221    222    222            2          0    16665 
   pagamentos 
   TABLE DATA           9   COPY public.pagamentos (id, cpf, valortotal) FROM stdin;
    public               postgres    false    220   �       /          0    16625    roupas 
   TABLE DATA           *   COPY public.roupas (id, nome) FROM stdin;
    public               postgres    false    217          0          0    16632    tamanhos 
   TABLE DATA           F   COPY public.tamanhos (id_roupa, id, nome, tamanho, preco) FROM stdin;
    public               postgres    false    218   S       4          0    16683    vendas 
   TABLE DATA           L   COPY public.vendas (id, cpf, descricao, precototal, datacompra) FROM stdin;
    public               postgres    false    222   �       =           0    0    pagamentos_id_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public.pagamentos_id_seq', 1, false);
          public               postgres    false    219            >           0    0    vendas_id_seq    SEQUENCE SET     <   SELECT pg_catalog.setval('public.vendas_id_seq', 10, true);
          public               postgres    false    221            �           2606    16672    pagamentos pagamentos_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.pagamentos
    ADD CONSTRAINT pagamentos_pkey PRIMARY KEY (id);
 D   ALTER TABLE ONLY public.pagamentos DROP CONSTRAINT pagamentos_pkey;
       public                 postgres    false    220            �           2606    16631    roupas roupas_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.roupas
    ADD CONSTRAINT roupas_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.roupas DROP CONSTRAINT roupas_pkey;
       public                 postgres    false    217            �           2606    16638    tamanhos tamanhos_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.tamanhos
    ADD CONSTRAINT tamanhos_pkey PRIMARY KEY (id);
 @   ALTER TABLE ONLY public.tamanhos DROP CONSTRAINT tamanhos_pkey;
       public                 postgres    false    218            �           2606    16690    vendas vendas_pkey 
   CONSTRAINT     P   ALTER TABLE ONLY public.vendas
    ADD CONSTRAINT vendas_pkey PRIMARY KEY (id);
 <   ALTER TABLE ONLY public.vendas DROP CONSTRAINT vendas_pkey;
       public                 postgres    false    222            �           2606    16639    tamanhos tamanhos_id_roupa_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.tamanhos
    ADD CONSTRAINT tamanhos_id_roupa_fkey FOREIGN KEY (id_roupa) REFERENCES public.roupas(id);
 I   ALTER TABLE ONLY public.tamanhos DROP CONSTRAINT tamanhos_id_roupa_fkey;
       public               postgres    false    217    4758    218            2      x������ � �      /   ,   x�36���/*�24�t.�/(HM�22�K-.�L������ ��	�      0   j   x�E�=� ����c�{�˹�I��Ƅ������և��!"Lw��X�w�U$���T�a�?Β$f&l�y�#�*٢\ՁۤF��3ܯ�c!���_��QJ}��'q      4   �   x���;� D�����6wI�?˖�ق�>�KH�4՛7�H@�9�!y.ϐ��9_)p,����i%E��M*3��
 ��
�F�+s3��~� �4<����4čk�����#�=��%�T���_w��oo�T'     