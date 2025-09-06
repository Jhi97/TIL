package hello.jdbc.repository;

import hello.jdbc.domain.Member;
import lombok.extern.slf4j.Slf4j;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.jdbc.datasource.DataSourceUtils;
import org.springframework.jdbc.support.JdbcUtils;
import org.springframework.jdbc.support.SQLErrorCodeSQLExceptionTranslator;
import org.springframework.jdbc.support.SQLExceptionTranslator;

import javax.sql.DataSource;
import java.sql.*;
import java.util.NoSuchElementException;

/**
 * JDBC Template 추가
 */
@Slf4j
public class MemberRepositoryV5 implements MemberRepository{

    private final JdbcTemplate template;

    public MemberRepositoryV5(DataSource dataSource) {
        this.template = new JdbcTemplate(dataSource);
    }

    @Override
    public Member save(Member member) {
        String sql = "insert into member(member_id, money) values(?, ?)";
        template.update(sql, member.getMemberId(), member.getMoney());
        return member;
//        Connection con = null;
//        PreparedStatement pstmt = null;
//
//        try {
//            con = getConnection();
//            pstmt = con.prepareStatement(sql);
//            pstmt.setString(1, member.getMemberId());
//            pstmt.setInt(2, member.getMoney());
//            pstmt.executeUpdate();
//            return member;
//        } catch (SQLException e) {
//            throw exTranslator.translate("save", sql, e);
//        } finally {
//            close(con, pstmt, null);
//        }
    }

    @Override
    public Member findById(String memberId)  {
        String sql = "select * from member where member_id = ?";
        return template.queryForObject(sql, memberRowMapper(), memberId);

//        Connection con = null;
//        PreparedStatement pstmt = null;
//        ResultSet result = null;
//
//        try {
//            con = getConnection();
//            pstmt = con.prepareStatement(sql);
//            pstmt.setString(1, memberId);
//
//            result = pstmt.executeQuery();
//
//            if (result.next()) {
//                Member member = new Member();
//                member.setMemberId(result.getString("member_id"));
//                member.setMoney(result.getInt("money"));
//                return member;
//            } else {
//                throw new NoSuchElementException("member not found memberId=" + memberId);
//            }
//        } catch (SQLException e) {
//            throw exTranslator.translate("findById", sql, e);
//        } finally {
//            close(con, pstmt, result);
//        }
    }

    private RowMapper<Member> memberRowMapper() {
        return (rs, rowNum) -> {
            Member member = new Member();
            member.setMemberId(rs.getString("member_id"));
            member.setMoney(rs.getInt("money"));
            return member;
        };
    }

    @Override
    public void update(String memberId, int money) {
        String sql = "update member set money=? where member_id=?";
        template.update(sql, money, memberId);

//        Connection con = null;
//        PreparedStatement pstmt = null;
//
//        try {
//            con = getConnection();
//            pstmt = con.prepareStatement(sql);
//            pstmt.setInt(1, money);
//            pstmt.setString(2, memberId);
//            //쿼리로 인해 실제 영향받은 row 수 리턴
//            int resultSize = pstmt.executeUpdate();
//            log.info("resultSize={}", resultSize);
//        } catch (SQLException e) {
//            throw exTranslator.translate("update", sql, e);
//        } finally {
//            close(con, pstmt, null);
//        }
    }

    @Override
    public void delete(String memberId) {
        String sql = "delete from member where member_id=?";
        template.update(sql, memberId);

//        Connection con = null;
//        PreparedStatement pstmt = null;
//
//        try {
//            con = getConnection();
//            pstmt = con.prepareStatement(sql);
//            pstmt.setString(1, memberId);
//
//            pstmt.executeUpdate();
//        } catch (SQLException e) {
//            throw exTranslator.translate("delete", sql, e);
//        } finally {
//            close(con, pstmt, null);
//        }
    }

//    private void close(Connection con, Statement stmt, ResultSet resultSet) {
//        JdbcUtils.closeResultSet(resultSet);
//        JdbcUtils.closeStatement(stmt);
//        DataSourceUtils.releaseConnection(con, dataSource);
//    }
//
//    private Connection getConnection() throws SQLException{
//        Connection con = DataSourceUtils.getConnection(dataSource);
//        log.info("get connection={}, class={}", con, con.getClass());
//
//        return con;
//    }
}
