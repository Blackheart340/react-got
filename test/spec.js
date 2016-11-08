import test from 'ava';
import React from 'react';
import { mount } from 'enzyme';

import Data from '../lib/';

const UserName = 'someusername';
const UserId = '1';
const url = `http://echo.jsontest.com/user/${UserName}/userid/${UserId}`;

const User = ({data}) => (
    <div className="user">
        <h1 id="name">{data.user}</h1>
        <h2 id="id">{data.userid}</h2>
    </div>
);

test.cb('should call onSuccess handler', t => {
    const handleSucces = ({data}) => {
        t.is(data.user, UserName);
        t.is(data.userid, UserId);
        t.end();
    };
    const wrapper = mount(<Data url={url} onSuccess={handleSucces} />);
});

test.cb('should provide data when component is children', t => {
    const handleSucces = () => {
        const user = wrapper.find(User);

        t.is(user.find('#name').text(), UserName);
        t.is(user.find('#id').text(), UserId);
        t.end();
    };

    const wrapper = mount(
        <Data url={url} onSuccess={handleSucces}>
            <User />
        </Data>
    );
});


test.cb('should provide data when component is property', t => {
    const handleSucces = () => {
        const user = wrapper.find(User);

        t.is(user.find('#name').text(), UserName);
        t.is(user.find('#id').text(), UserId);
        t.end();
    };

    const wrapper = mount(<Data url={url} onSuccess={handleSucces} component={User} />);
});
