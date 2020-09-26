import React from 'react';
import {mount} from "enzyme";
import {Pagination} from "../components/Pagination";
import {List} from "../components/List";
import {Store} from "../logic/Store";

test('Click next success', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={1} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('1 / 10');

    pagination.find("#next").simulate('click');

    expect(pagination.find('#next').prop('disabled')).toBeFalsy();
    expect(spy).lastCalledWith(2);
});

test('Click next disabled', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={10} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('10 / 10');

    pagination.find("#next").simulate('click');

    expect(pagination.find('#next').prop('disabled')).toBeTruthy();
    expect(pagination.find("#page").text()).toBe('10 / 10');
});

test('Click prev success', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={2} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('2 / 10');

    pagination.find("#prev").simulate('click');

    expect(pagination.find('#prev').prop('disabled')).toBeFalsy();
    expect(spy).lastCalledWith(1);
});

test('Click prev disabled', () => {
    const spy = jest.fn();
    const pagination = mount(<Pagination page={1} setPage={spy} totalPages={10}/>);

    expect(pagination.find("#page").text()).toBe('1 / 10');

    pagination.find("#prev").simulate('click');

    expect(pagination.find('#prev').prop('disabled')).toBeTruthy();
    expect(pagination.find("#page").text()).toBe('1 / 10');
});

test('List has 10 items', () => {
    const items = ['1', '2', '3', '1', '2', '3', '1', '2', '3', '1']
    const list = mount(<List items={items}/>)

    expect(list.find('#wrapper').children()).toHaveLength(10);
});

test('Correct Data for page', () => {
    const store = new Store();
    expect(store.getData(1)[0]).toBe('Entry 0');
    expect(store.getData(1)[9]).toBe('Entry 9');
    expect(store.getData(2)[0]).toBe('Entry 10');
    expect(store.getData(2)[9]).toBe('Entry 19');
    expect(store.getData(10)[0]).toBe('Entry 90');
    expect(store.getData(10)[9]).toBe('Entry 99');
});
