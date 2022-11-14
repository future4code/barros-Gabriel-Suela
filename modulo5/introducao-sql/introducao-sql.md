## 1)

a) O comando varchar é um delimitador de caracteres, com ele nós podemos especificar uma quantidade máxima de caracteres que o parametro irá receber

b) show databases mostra os schemas e show tables mostra as tabelas criadas

c) com o describe actor o resultado que temos é o mesmo criação das tabelas.

## 2) 

b) Entrada duplicada "002" para a chave primaria. Esse erro ocorreu pois o id é único e não pode ser repetido.

d) o campo nome não tem um valor padrão, ou seja, como é definido na criação como not null, todos os campos são obrigatórios

e) valor incorreto para o valor de data. Isso ocorre pois as datas devem ser passadas por "".

## 3)
```sh
a) SELECT * from Actor WHERE gender = "female";
```
```sh
b) SELECT salary from Actor WHERE nome = "Tony Ramos";
```

c) retorna uma tabela onde todos os campos são null pois na tabela criada, não existe o valor invalid para gender.

```sh
e) SELECT id, nome, salary from Actor WHERE salary < 500000;
```

## 4)

a) a querry está buscando na tabela actor todas as informações de resultados que comecem com a letra A ou a letra j e o salário maior que 300000

```sh
b) SELECT * FROM Actor WHERE (nome NOT LIKE "A%") AND salary > 35000000;
```

```sh
C) SELECT * FROM Actor WHERE nome LIKE "g%" or nome LIKE "G%";
```

```sh
d) SELECT * FROM Actor WHERE (name LIKE "%g%" OR name LIKE "%G%" OR name LIKE "%a%" OR name LIKE "%A%") AND salary BETWEEN 350000 AND 900000;
```
## 5


```sh
a) CREATE TABLE Filmes(
	id VARCHAR(255) PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    sinopse TEXT NOT NULL,
    data_de_lancamento DATE NOT NULL,
    avaliacao INT NOT NULL
);
```


```sh
b) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
    VALUES("001", 
    "Se Eu Fosse Você", 
    "Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos", 
    "2006-01-06", 
    7
);
```


```sh
c) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
    "002",
    "Doce mãe", 
    "Dona Picucha, uma animada senhora de 85 anos, sempre causa grandes confusões. A vida dela e dos seus quatro filhos sofre uma reviravolta depois que Zaida, empregada e amiga de Dona Picucha, anuncia que vai se casar e não poderá mais morar com ela", 
    "2012-12-27",
     10
);
```

```sh
d) INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao)
VALUES(
    "003", 
    "Dona Flor e Seus Dois Maridos", 
    "Dona Flor é uma sedutora professora de culinária casada com Vadinho, que só quer saber de farras e jogatina nas boates. A vida de abusos acaba por acarretar sua morte precoce.", 
    "2017-11-02", 
    8
);
```

e) 
``` sh
INSERT INTO Filmes (id, nome, sinopse, data_de_lancamento, avaliacao) 
VALUES(
	"004",
    "Deus é Brasileiro",
    "Cansado da humanidade, Deus resolve tirar férias para descansar e procura alguém no Brasil capaz de substituí-lo. O borracheiro e pescador Taoca e a solitária Madá deverão guiá-lo até Quincas das Mulas, candidato de Deus a santo.",
    "2003-01-31",
    9
);
```


## 6)
```sh
a) SELECT id, nome, avaliacao FROM Filmes WHERE id = "002";
```

```sh
b) SELECT * FROM Filmes WHERE nome = "Dona Flor e Seus Dois Maridos";
```

```sh
c) SELECT id, nome, sinopse FROM Filmes WHERE avaliacao > 7;
```

## 7)

```sh
a) SELECT * FROM Filmes WHERE nome LIKE "%vida%";
```

```sh
b) SELECT * FROM Filmes where nome LIKE "%TERMO DE BUSCA%" OR sinopse LIKE "%TERMO DE BUSCA%";
```

```sh
c) SELECT * FROM Filmes WHERE data_de_lancamento < "2020-05-04"
```

```sh
d) SELECT * FROM MOVIE
WHERE data_de_lancamento < "2020-05-04" AND 
      (nome LIKE "%TERMO DE BUSCA%" OR
      sinopse LIKE "%TERMO DE BUSCA%") AND avaliacao > 7;
      
```




