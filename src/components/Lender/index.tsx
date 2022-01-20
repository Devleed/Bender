import React, { FC } from 'react'

import './styles.scss'

type Props = Record<string, unknown>

const Lender: FC<Props> = () => {
  return (
    <div className="container">
      <div style={{ marginBottom: '70px' }}>
        <h2 style={{ marginBottom: '20px' }}>Accept Lending Request</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            // width: '70vw',
            border: '1px solid #be0072',
            // padding: '20px',
          }}
        >
          <div
            className="info_row"
            // style={{
            //   borderBottom: !props.pendingRequests.length
            //     ? 'none'
            //     : '0.5px solid #be0072',
            // }}
          >
            <h3>Borrower</h3>
            <h3>Amount</h3>
            <h3>Duration</h3>
            <h3>Status</h3>
            <h3>Actions</h3>
          </div>
          {/* {props.pendingRequests.map((request, i) => {
            return (
              <div
                key={i}
                className="info_row"
                style={{
                  borderBottom:
                    i === props.pendingRequests.length - 1
                      ? 'none'
                      : '0.5px solid #be0072',
                }}
              >
                <p>
                  {request.borrower.slice(0, 8) +
                    '  ...........  ' +
                    request.borrower.slice(-8)}
                </p>
                <p>{functions.convertWeiIntoEth(request.amount)} DANI</p>
                <p>{parseFloat(request.duration) / 60} minutes</p>
                <p>{request.status}</p>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <button
                    className="primary-btn"
                    style={{ marginRight: 10 }}
                    onClick={() => acceptRequest(request.id)}
                  >
                    Accept Request
                  </button>
                  <button
                    className="primary-btn"
                    onClick={async () => {
                      const res = await functions.getBorrowerDetails(
                        request.borrower,
                      )
                      props.setDetailsList(res)
                    }}
                  >
                    View history
                  </button>
                </div>
              </div>
            )
          })} */}
        </div>
      </div>

      {/* <button onClick={acceptRequest}>Enter</button> */}

      <div style={{ marginBottom: '70px' }}>
        <h2 style={{ marginBottom: '20px' }}>Report Lending Request</h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignSelf: 'center',
            // width: '70vw',
            border: '1px solid #be0072',
            // padding: '20px',
          }}
        >
          <div
            className="info_row"
            // style={{
            //   borderBottom: !props.ongoingRequests.length
            //     ? 'none'
            //     : '0.5px solid #be0072',
            // }}
          >
            <h3>Borrower</h3>
            <h3>Amount</h3>
            <h3>Duration</h3>
            <h3>Status</h3>
            <h3>Actions</h3>
          </div>
          {/* {props.ongoingRequests
            .filter(request => {
              return (
                request.lender.toLowerCase() === context.account.toLowerCase()
              )
            })
            .map((request, i) => {
              return (
                <div
                  className="info_row"
                  style={{
                    borderBottom:
                      i === props.ongoingRequests.length - 1
                        ? 'none'
                        : '0.5px solid #be0072',
                  }}
                >
                  <p>
                    {request.borrower.slice(0, 8) +
                      '  ...........  ' +
                      request.borrower.slice(-8)}
                  </p>
                  <p>{functions.convertWeiIntoEth(request.amount)} DANI</p>
                  <p>{parseFloat(request.duration) / 60} minutes</p>
                  <p>{request.status}</p>
                  <button
                    className="primary-btn"
                    onClick={() => reportRequest(request.id)}
                  >
                    Report
                  </button>
                </div>
              )
            })} */}
        </div>
      </div>
    </div>
  )
}

export default Lender
