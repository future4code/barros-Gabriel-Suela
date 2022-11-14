# Exericio 1

```sh
a) iria remover a coluna salary
b) iria trocar o nome da tabela gender para sex estabelecendo um limite de caracteres de 6
c) iria trocar novamente o nome da coluna gender para gender estabelecendo um limite de caracteres de 255
d) alter table Actor change gender gender VARCHAR(100);
```
# Exercicio 2

```sh
a) update Actor 
set nome = "Moacyr Franco",
birth_date = "2020-02-10" 
where id = "003";
```

```sh
b) update Actor 
set nome = "JULIANA PAES"
where nome = "Juliana Paes";
```

```sh
c) update Actor 
set 
nome = "Moacyr Franco",
birth_date = "2020-02-10",
salary = 80000,
gender = "male"
where id = "005";
```

# Exercicio 3

```sh
a) delete from Actor where nome = "Fernanda Montenegro";
```

```sh
b) delete from Actor a where gender = "male" and salary > 100000000;
```

# Exercicio 4

```sh
a) select MAX(salary) from Actor a ;
```

```sh
b) select MIN(salary) from Actor a where gender = "female";
```

```sh
c) select COUNT(*) from Actor a where gender = "female";
```

```sh
d) select SUM(salary) from Actor; 
```

# Exercicio 5
```sh
a) nesta querry estamos fazendo a contagem de pessoas na tabela onde serão agrupadas por genero
```

```sh
b) select id, nome from Actor 
order by nome DESC;
```

```sh
c) select * from Actor a
order by salary;
```

```sh
d) select * from Actor a 
order by salary desc
limit 3;
```

```sh
e) select avg(salary)
from Actor a 
group by gender;
```


# Exercicio 6

```sh
a) alter table Movies add playing_limit_date date;
```

```sh
b) alter table Movies change avaliacao rating float;
```

```sh
c) update Movies 
	set 
	playing_limit_date = "2020-12-31"
	where id = "001";
```