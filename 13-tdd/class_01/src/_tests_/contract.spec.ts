import { ContractModel, ContractPrime } from '../models/contract-model'

describe('Class ContractModel', () => {
  it('Contract regular 12 month', () => {
    const contract = new ContractModel({
      id: '#001',
      date_init: new Date(2019),
      expiration_date: new Date(2020),
      month: 12,
      monthlyCost: 500
    })

    expect(contract.getId()).toBe('#001')
    expect(contract.getDateInit()).toStrictEqual(new Date(2019))
    expect(contract.getExpirationDate()).toStrictEqual(new Date(2020))
    expect(contract.getMonth()).toBe(12)
    expect(contract.getMonthlyCost()).toBe(500)
  })

  it('monthyDescount contract Prime 24 months', () => {
    const contractPrime = new ContractPrime({
      id: '#002',
      date_init: new Date(2019),
      expiration_date: new Date(2021),
      month: 24,
      monthlyCost: 500
    })

    expect(contractPrime.monthlyDiscount()).toBe(50)
  })
})
