import React from 'react';
import {mount} from "enzyme";
import {Pagination} from "../components/Pagination";

test('Click next', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={1} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('1 / 10');

    pagination.find("#next").simulate('click');

    expect(spy).lastCalledWith(2);
});

test('Click prev disabled', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={1} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('1 / 10');

    pagination.find("#prev").simulate('click');

    expect(pagination.find('#prev').prop('disabled')).toBeTruthy();
});

test('Click prev success', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={2} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('2 / 10');

    pagination.find("#prev").simulate('click');

    expect(pagination.find('#prev').prop('disabled')).toBeFalsy();

    expect(spy).lastCalledWith(1);
});
