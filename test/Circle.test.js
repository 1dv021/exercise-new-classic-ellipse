/**
 * Tests for the Circle type.
 *
 * @author Mats Loock
 * @version 1.1.0
 */

'use strict'

const expect = require('chai').expect

describe('Circle - Using public properties (file: Circle.js)', () => {
  let Circle

  describe('Type', () => {
    it('module .src/Circle should exist', done => {
      Circle = require('../src/Circle')
      done()
    })

    it('should be instance of Circle', done => {
      let circle = new Circle()
      expect(circle).to.be.an.instanceOf(Circle)
      done()
    })
  })

  describe('Constructor', () => {
    it('should set the property side to 11.7', done => {
      let circle = new Circle(11.7)
      expect(circle).to.have.property('a', 11.7)
      expect(circle).to.have.property('b', 11.7)
      expect(circle).to.have.property('radius', 11.7)
      done()
    })
  })

  describe('Prototype', () => {
    describe('getArea method', () => {
      it('should be defined', done => {
        expect(Circle.prototype).to.have.property('getArea').that.is.a('Function')
        done()
      })

      it('{ radius = 7.8 } should return 191.13449704440302', done => {
        let circle = new Circle(7.8)
        expect(circle.getArea()).to.equal(191.13449704440302)
        done()
      })
    })

    describe('getCircumference method', () => {
      it('should be defined', done => {
        expect(Circle.prototype).to.have.property('getCircumference').that.is.a('Function')
        done()
      })

      it('{ a = 6, b = 9.7 } should return 60.94689747964198', done => {
        let circle = new Circle(9.7)
        expect(circle.getCircumference()).to.equal(60.94689747964198)
        done()
      })
    })

    describe('toString method', () => {
      it('should be defined as an own property', done => {
        expect(Circle.prototype.hasOwnProperty('toString')).to.equal(true)
        expect(Circle.prototype.toString).to.be.a('Function')
        done()
      })

      it(`{ radius = 13.2 } should return 'radius: 13.2, area: 547.4, circumference: 82.9'`, done => {
        let circle = new Circle(13.2)
        expect(circle.toString()).to.equal('radius: 13.2, area: 547.4, circumference: 82.9')
        done()
      })
    })
  })
})
