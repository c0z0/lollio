import React, {Component} from 'react'
import styled from 'styled-components'
import moment from 'moment'

import Button from '../Button'

const Wrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
  display: inline-block;
  color: #484848;
  margin: 16px;
  transition: all .2s ease-out;
`

const Actions = styled.div`
  border-top: 1px solid #ddd;
  padding: 8px;
  text-align: right;
`

const Bar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  background: #ed174c;
`

const Month = styled.h2`text-align: center;`

const ChangeMonth = styled.button`
  color: white;
  border: none !important;
  outline: none !important;
  background: none;
  cursor: pointer;
  ${props => props.hid && `opacity: 0;`};
  ${props => props.pink && `color: #ed174c;`};
`

const Table = styled.table`padding: 8px;`

const Content = styled.div`
  padding: 8px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`

const Time = styled.div`
  display: flex;
  flex-direction: column;
`

const Title = styled.h2`color: #ed174c;`

const Day = styled.td`
  padding: 16px;
  border-radius: 2px;
  text-align: center;
  cursor: pointer;
  transition: all .2s ease-out;

  &:hover {
    color: white;
    background: #ed174c;
  }
  ${props => props.active && `color: #ed174c; border: 1px solid #ed174c;`};
`

const DayOfWeek = styled.th`color: #aaa;`

export default class DatePicker extends Component {
  state = {monthOffset: 0, setDate: '', minute: 0, hour: 9}
  render() {
    const {monthOffset, setDate, minute, hour} = this.state

    if (setDate)
      return (
        <Wrapper>
          <Bar>
            <ChangeMonth onClick={() => this.setState({setDate: ''})}>
              <span className="lnr lnr-chevron-left" />
            </ChangeMonth>
            <Month>
              {moment(setDate).format('Do of MMMM YYYY')}
            </Month>
            <ChangeMonth hid>
              <span className="lnr lnr-chevron-left" />
            </ChangeMonth>
          </Bar>
          <Content>
            <Time>
              <ChangeMonth
                pink
                onClick={() =>
                  this.setState({hour: hour !== 23 ? hour + 1 : 0})}>
                <span className="lnr lnr-chevron-up" />
              </ChangeMonth>
              <Title>{`${hour < 10 ? '0' : ''}${hour}`}</Title>
              <ChangeMonth
                pink
                onClick={() =>
                  this.setState({hour: hour !== 0 ? hour - 1 : 23})}>
                <span className="lnr lnr-chevron-down" />
              </ChangeMonth>
            </Time>
            <h3>:</h3>
            <Time>
              <ChangeMonth
                pink
                onClick={() =>
                  this.setState({minute: minute !== 59 ? minute + 1 : 0})}>
                <span className="lnr lnr-chevron-up" />
              </ChangeMonth>
              <Title>{`${minute < 10 ? '0' : ''}${minute}`}</Title>
              <ChangeMonth
                pink
                onClick={() =>
                  this.setState({minute: minute !== 0 ? minute - 1 : 59})}>
                <span className="lnr lnr-chevron-down" />
              </ChangeMonth>
            </Time>
          </Content>
          <Actions>
            <Button
              onClick={() =>
                this.props.onChange(
                  moment(setDate).hour(hour).minute(minute).toISOString()
                )}>
              Set
            </Button>
          </Actions>
        </Wrapper>
      )
    const date = moment()
      .date(1)
      .hour(0)
      .minute(0)
      .second(0)
      .millisecond(0)
      .add(monthOffset, 'M')

    const year = date.year() !== moment().year() && date.year()

    const firstWeekOffset = Array(
      date.date(1).day() - 1 < 0 ? 6 : date.date(1).day() - 1
    )
      .fill(1)
      .map((_, i) => <td key={i} />)

    const days = firstWeekOffset.concat(
      Array(date.daysInMonth()).fill().map((_, d) =>
        <Day
          key={firstWeekOffset.length + d + 1}
          onClick={() =>
            this.setState({
              setDate: moment()
                .add(monthOffset, 'M')
                .date(d + 1)
                .hour(0)
                .minute(0)
                .second(0)
                .millisecond(0)
                .toISOString(),
            })}
          active={
            moment()
              .hour(0)
              .minute(0)
              .second(0)
              .millisecond(0)
              .toISOString() ===
            moment()
              .add(monthOffset, 'M')
              .date(d + 1)
              .hour(0)
              .minute(0)
              .second(0)
              .millisecond(0)
              .toISOString()
          }>
          {d + 1}
        </Day>
      )
    )

    const monthTitle = date.format('MMMM')

    const daysOfWeek = moment.weekdaysShort()

    daysOfWeek.push(daysOfWeek.splice(0, 1)[0])

    const weeks = new Array(Math.ceil(days.length / 7))
      .fill()
      .map(_ => days.splice(0, 7))

    return (
      <Wrapper>
        <Bar>
          <ChangeMonth
            onClick={() => this.setState({monthOffset: monthOffset - 1})}>
            <span className="lnr lnr-chevron-left" />
          </ChangeMonth>
          <Month>
            {monthTitle}
            {year ? `, ${year}` : null}
          </Month>
          <ChangeMonth
            onClick={() => this.setState({monthOffset: monthOffset + 1})}>
            <span className="lnr lnr-chevron-right" />
          </ChangeMonth>
        </Bar>
        <Table>
          <thead>
            <tr>
              {daysOfWeek.map((d, i) =>
                <DayOfWeek key={i}>
                  {d}
                </DayOfWeek>
              )}
            </tr>
          </thead>
          <tbody>
            {weeks.map((w, i) =>
              <tr key={i}>
                {w}
              </tr>
            )}
          </tbody>
        </Table>
      </Wrapper>
    )
  }
}
