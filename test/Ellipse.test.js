/**
 * Tests for the Ellipse type.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const expect = require('chai').expect

describe('Ellipse - Using public properties (file: Ellipse.js)', () => {
  let Ellipse

  describe('Type', () => {
    it('module ./src/Ellipse should exist', done => {
      Ellipse = require('../src/Ellipse')
      done()
    })

    it('should be instance of Ellipse', done => {
      let ellipse = new Ellipse()
      expect(ellipse).to.be.an.instanceOf(Ellipse)
      done()
    })
  })

  describe('Constructor', () => {
    it('should set the property a to 11.7', done => {
      let ellipse = new Ellipse(11.7, 42.4)
      expect(ellipse).to.have.property('a', 11.7)
      done()
    })

    it('should set the property b to 58.9', done => {
      let ellipse = new Ellipse(3.8, 58.9)
      expect(ellipse).to.have.property('b', 58.9)
      done()
    })
  })

  describe('Prototype', () => {
    describe('getArea method', () => {
      it('should be defined', done => {
        expect(Ellipse.prototype).to.have.property('getArea').that.is.a('Function')
        done()
      })

      it('{ a = 78.2, b = 7.4 } should return 1817.9768367793415', done => {
        let ellipse = new Ellipse(78.2, 7.4)
        expect(ellipse.getArea()).to.equal(1817.9768367793415)
        done()
      })
    })

    describe('circumference method', () => {
      it('should be defined', done => {
        expect(Ellipse.prototype).to.have.property('getCircumference').that.is.a('Function')
        done()
      })

      it('{ a = 6, b = 9.7 } should return 50.67419139044478', done => {
        let ellipse = new Ellipse(6, 9.7)
        expect(ellipse.getCircumference()).to.equal(50.67419139044478)
        done()
      })
    })

    describe('toString method', () => {
      it('should be defined as an own property', done => {
        expect(Ellipse.prototype.hasOwnProperty('toString')).to.equal(true)
        expect(Ellipse.prototype.toString).to.be.a('Function')
        done()
      })

      it(`{ a = 13.2, b = 42.1 } should return 'a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0'`, done => {
        let ellipse = new Ellipse(13.2, 42.1)
        expect(ellipse.toString()).to.equal('a: 13.2, b: 42.1, area: 1745.8, circumference: 196.0')
        done()
      })
    })
  })
})
