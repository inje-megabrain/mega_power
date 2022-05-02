### 순수 Jdbc와 동일한 환경설정을 하면 된다.

### 스프링 Jdbc Template과 MyDatis 같은 라이브러리는 JDBC API에서 본 반복 코드를

### 대부분 제거해준다. 하지만 SQL은 직접 작성해야 한다.

스프링 JdbcTemplate 회원 리포지토리

```java
package hello.hellospring.repository;

import hello.hellospring.domain.Member;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.simple.SimpleJdbcInsert;

import javax.sql.DataSource;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class JdbcTemplateMemberRepository implements MemberRepository{

    private final JdbcTemplate jdbcTemplate;
    public JdbcTemplateMemberRepository(DataSource dataSource){ //생성자가 하나면 @AutoWired 생략가능
        jdbcTemplate = new JdbcTemplate(dataSource);
    }
    @Override
    public Member save(Member member) {
        SimpleJdbcInsert jdbcInsert = new SimpleJdbcInsert(jdbcTemplate);
        jdbcInsert.withTableName("member").usingGeneratedKeyColumns("id"); //이렇게 짜면 쿼리를 짤 필요가 없음

        Map<String, Object> parameters = new HashMap<>();
        parameters.put("name", member.getName());

        Number key = jdbcInsert.executeAndReturnKey(new MapSqlParameterSource(parameters));
        member.setId(key.longValue());
        return member;
    }

    @Override
    public Optional<Member> findById(Long id) {
        List<Member> result = jdbcTemplate.query("select * from member where id =?", memberRowMapper(),id);
        return result.stream().findAny();
    }

    @Override
    public Optional<Member> findByName(String name) {
        List<Member> result = jdbcTemplate.query("select * from member where name = ?", memberRowMapper(), name);
        return result.stream().findAny();
    }

    @Override
    public List<Member> findeAll() {
        return jdbcTemplate.query("select * from member", memberRowMapper());
    }
    private RowMapper<Member>memberRowMapper(){
        /*return new RowMapper<Member>() { //원래코드
            @Override
            public Member mapRow(ResultSet rs, int rowNum) throws SQLException {
                Member member = new Member();
                member.setId(rs.getLong(("id")));
                member.setName(rs.getString("name"));
                return member;
            }
        }*/
        return (rs, rowNum) -> { //Option + Enter 키로 람다로 줄일 수 있음
            Member member = new Member();
            member.setId(rs.getLong(("id")));
            member.setName(rs.getString("name"));
            return member;
        };
    }
}
```