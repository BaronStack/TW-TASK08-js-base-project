"use strict";
var _ = require("lodash");
var chai = require("chai");
var sinon = require("sinon");
var sinonChai = require("sinon-chai");
var expect = chai.expect;
chai.use(sinonChai);

var postNet = require("../lib/main.js");
var testForm = require("../lib/testForm");

describe("测试描述", function(){
    sinon.spy(console, 'log');

    it("输入五位数值进行转码：95713", function(){

        let inputs = '95713';
        var result = postNet(inputs);
        var expect_string = testForm.getBarCodeFive();
        
        expect(expect_string).to.equal(result);
    });

    it("输入九位数值进行转码：457362488", function(){

        let inputs ='457362488';
        var result = postNet(inputs);
        var expect_string = testForm.getBarCodeNine();

        expect(expect_string).to.equal(result);
    });

    it("输入十位数值进行转码：45736-2488", function(){

        let inputs ='45736-2488';
        var result = postNet(inputs);
        var expect_string = testForm.getBarCodeNine();

        expect(expect_string).to.equal(result);
    });

    it("输入条形码：|   |:|::   :|:|:   |:::|   :::||   ::||:   :|:|:   | 进行解码", function(){

        let inputs ='|   |:|::   :|:|:   |:::|   :::||   ::||:   :|:|:   |';
        var result = postNet(inputs);
        var expect_string = '95713';

        expect(expect_string).to.equal(result);
    });

    it("输入条形码：|   :|::|   :|:|:   |:::|   ::||:   :||::   ::|:|   :|::|   |::|:   |::|:   ::||:   | 进行解码", function(){

        let inputs ='|   :|::|   :|:|:   |:::|   ::||:   :||::   ::|:|   :|::|   |::|:   |::|:   ::||:   |';
        var result = postNet(inputs);
        var expect_string = '45736-2488';

        expect(expect_string).to.equal(result);
    });


});