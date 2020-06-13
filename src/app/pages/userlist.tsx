import React from "react";
import { Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { switchMap, tap } from 'rxjs/operators';
import { useDispatch } from "react-redux";
import { userAction } from "../store/users.action";
import { User } from "../store/users.state";
import { 
  Button,
  PageContainer,
  PageHeader,
  SectionBody
} from "../components/common-styled";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  font-size: 1.05rem;
  font-weight: 500;
  color: #777;
  padding: 20px 0;
  > li {
    margin-bottom: 10px;
  }
`;

function UserList ({ users }: { users: User[] }) {
  const dispatch = useDispatch();
  
  const clickEvent = new Subject<void>();
  clickEvent.pipe(
    switchMap(() => 
      ajax.getJSON<{ data: User[] }>('http://localhost:20000/people').pipe(
        tap(({ data }) => {
          dispatch(userAction.setUser(data));
        }),
      )
    )
  ).subscribe();
  
  const UserList = users.map((user: User, index) => (
    <li key={index}>
      <span>User Name : </span>{user.name}
    </li>
  ));

  return (
    <PageContainer>
      <PageHeader>
        <h1>User List</h1>
      </PageHeader>
      <SectionBody>
        <Button type="button" onClick={() => clickEvent.next()}> 조회 </Button>
        <Ul>
          { UserList }
        </Ul>
      </SectionBody>
    </PageContainer>
  );
}

export default UserList;
