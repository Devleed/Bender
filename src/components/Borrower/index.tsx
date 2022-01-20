import React, { FC, useState } from 'react'

import './styles.scss'

type Props = Record<string, unknown>

const Borrower: FC<Props> = () => {
  const [cnicInput, setCnicInput] = useState<string>('')
  const [amountInput, setAmountInput] = useState<string>('')
  const [durationInput, setDurationInput] = useState<string>('')

  return (
    <div className="container">
      <div className="container">
        <div style={{ marginBottom: '70px' }}>
          <h2 style={{ marginBottom: '20px' }}>Not already registered ?</h2>

          <input
            className="primary-input"
            style={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              width: '300px',
            }}
            name="cnic-input"
            value={cnicInput}
            onChange={e => setCnicInput(e.target.value)}
            placeholder="Enter cnic"
            type="number"
          />
          <button
            className="primary-btn"
            style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
            // onClick={registerBorrower}
          >
            Register yourself as a borrower &rarr;
          </button>
        </div>

        <div style={{ marginBottom: '70px' }}>
          <h2 style={{ marginBottom: '20px' }}>
            Wants to remove Yourself as Borrower ?
          </h2>

          <button
            className="primary-btn"
            style={{ width: '300px' }}
            // onClick={removeBorrower}
          >
            Remove
          </button>
        </div>

        <div style={{ marginBottom: '70px' }}>
          <h2 style={{ marginBottom: '20px' }}>
            Wants to add a lending request ?
          </h2>
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              width: '400px',
            }}
          >
            <input
              className="primary-input"
              type="number"
              name="amount"
              onChange={e => setAmountInput(e.target.value)}
              value={amountInput}
              placeholder="Amount"
              style={{ marginBottom: '15px' }}
            />
            <input
              className="primary-input"
              type="text"
              name="duration"
              onChange={e => setDurationInput(e.target.value)}
              value={durationInput}
              placeholder="Duration"
              style={{ marginBottom: '15px' }}
            />
            <button
              className="primary-btn"
              // onClick={requestFunds}
            >
              Enter
            </button>
          </div>
        </div>

        <div>
          <h2 style={{ marginBottom: '20px' }}>Payback Loan</h2>
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
              //   borderBottom: !props.ongoingRequests.filter(
              //     request =>
              //       request.borrower.toLowerCase() ===
              //       context.account.toLowerCase(),
              //   ).length
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
            .filter(
              request =>
                request.borrower.toLowerCase() ===
                context.account.toLowerCase(),
            )
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
                    onClick={() => payback(request.id)}
                  >
                    Payback Loan
                  </button>
                </div>
              )
            })} */}
          </div>
          {/* <input type="text" name="name" onChange={handleID3.bind(this)} />
        <button onClick={payBack}>Enter</button> */}
        </div>
      </div>
    </div>
  )
}

export default Borrower
