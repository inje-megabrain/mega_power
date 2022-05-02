# postgresql 도커라이징

상태: E105

먼저 postgresql을 사용하기 위해 의존성을 주입해줍니다

`implementation 'org.postgresql:postgresql:42.3.3'`

docker-compose.yml파일을 만들어줍니다

![Untitled](postgresql%20d601d/Untitled.png)

![Untitled](postgresql%20d601d/Untitled%201.png)

application.yml에서 원래 쓰던 testdb인 h2 데이터베이스와 postgresql를 분리해줍니다

![Untitled](postgresql%20d601d/Untitled%202.png)

![스크린샷 2022-04-07 23.01.33.png](postgresql%20d601d/%EC%8A%A4%ED%81%AC%EB%A6%B0%EC%83%B7_2022-04-07_23.01.33.png)

![Untitled](postgresql%20d601d/Untitled%203.png)

h2데이터베이스는 테스트를 돌릴때만 사용 할 것이기 때문에 test코드에도 어노테이션을 달아줍니다

`@ActiveProfiles*(*"test"*)*`

![Untitled](postgresql%20d601d/Untitled%204.png)

![Untitled](postgresql%20d601d/Untitled%205.png)

PostgreSQL을 연동 완료했습니다

git허브에 push커밋 해줍니다

push를 하는 중에 충돌이 일어났습니다

![Untitled](postgresql%20d601d/Untitled%206.png)

`git config pull.rebase false`

다시 merge하는 커밋을 달아줍니다

push를 때려줍니다 

---

docker에 올려줍시다

```docker
docker-compose up -d 
```

### 추가 - DB 접속하는 법

- 컨테이너 접속

```docker
❯ docker exec -it backend_postgresql_1 sh
```

- DB 접속
    
    ```docker
    psql -U "username" -d "database"
    ```
    
- DB 조회 및 , 테이블 조회
    
    ```docker
    postgres=# \l
                                     List of databases
       Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
    -----------+----------+----------+------------+------------+-----------------------
     e105      | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
     template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
    (4 rows)
    
    postgres=# \dt
    Did not find any relations.
    postgres=# \c e105
    You are now connected to database "e105" as user "postgres".
    e105=# \l
                                     List of databases
       Name    |  Owner   | Encoding |  Collate   |   Ctype    |   Access privileges
    -----------+----------+----------+------------+------------+-----------------------
     e105      | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     postgres  | postgres | UTF8     | en_US.utf8 | en_US.utf8 |
     template0 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
     template1 | postgres | UTF8     | en_US.utf8 | en_US.utf8 | =c/postgres          +
               |          |          |            |            | postgres=CTc/postgres
    (4 rows)
    
    e105=# \dt
              List of relations
     Schema |  Name   | Type  |  Owner
    --------+---------+-------+----------
     public | bord    | table | postgres
     public | meeting | table | postgres
     public | member  | table | postgres
     public | seat    | table | postgres
    (4 rows)
    
    e105=# SELECT * FROM member;
     member_id |   email    |  name  |                           password                           | role  | student_id |
      team
    -----------+------------+--------+--------------------------------------------------------------+-------+------------+--
    ----------
             1 | sbs@gg.com | 성병석 | $2a$10$9UAq5mbD4.NBIC9qa5/IOeALocCyuM4GiKCP3WXDWjwkeS/a1/GL. | GUEST | 20185678   |
    가브레인
    (1 row)
    ```
    

![Untitled](postgresql%20d601d/Untitled%207.png)

![Untitled](postgresql%20d601d/Untitled%208.png)