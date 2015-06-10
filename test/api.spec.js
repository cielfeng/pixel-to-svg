// Dependencies
import {equal} from 'power-assert'
import pixel from 'pixel'
import cheerio from 'cheerio'
import {convert} from '../src'

// Fixture
let fixture= require('fixture-images')

// Environment
let limitFileSize= 1024 * 256// kb

// Specs
describe('API',()=>{
  describe('.convert',()=>{
    it('static gif',done =>{
      pixel.parse(fixture.path.still.gif)
      .then(images =>{
        let svg= convert(images[0])
        let $= cheerio.load(svg)

        let {width,height}= $('svg').attr()
        let colors= $('path').length
        let underFileSize= svg.length < limitFileSize

        equal(width,112)
        equal(height,112)
        equal(colors,5)
        equal(underFileSize,true)

        done()
      })
    })

    it('static png',done =>{
      pixel.parse(fixture.path.still.png)
      .then(images =>{
        let svg= convert(images[0])
        let $= cheerio.load(svg)

        let {width,height}= $('svg').attr()
        let colors= $('path').length
        let underFileSize= svg.length < limitFileSize

        equal(width,96)
        equal(height,96)
        equal(colors,9)
        equal(underFileSize,true)

        done()
      })
    })

    it('static jpg',done =>{
      pixel.parse(fixture.path.still.jpg)
      .then(images =>{
        let svg= convert(images[0])
        let $= cheerio.load(svg)

        let {width,height}= $('svg').attr()
        let colors= $('path').length
        let underFileSize= svg.length < limitFileSize

        equal(width,256)
        equal(height,192)
        equal(colors,145)
        equal(underFileSize,true)

        done()
      })
    })

    it('static bmp',done =>{
      pixel.parse(fixture.path.still.bmp)
      .then(images =>{
        let svg= convert(images[0])
        let $= cheerio.load(svg)

        let {width,height}= $('svg').attr()
        let colors= $('path').length
        let underFileSize= svg.length < limitFileSize

        equal(width,128)
        equal(height,128)
        equal(colors,9)
        equal(underFileSize,true)

        done()
      })
    })
  })
})
