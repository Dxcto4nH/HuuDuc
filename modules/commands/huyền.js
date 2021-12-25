const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "huyền",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Thanh Dz",
  description: "Ảnh Khánh Huyền",
  commandCategory: "Ảnh",
  usages: "imghuyen",
  cooldowns: 5,
  dependencies: {
    "request": "",
    "fs": "",
    "axios": ""
  }
};

module.exports.run = async({api,event,args,Users,Threads,Currencies}) => {
	var link = [
"https://i.imgur.com/nF6B7Rj.jpg",
"https://i.imgur.com/2VEK03s.jpg",
"https://i.imgur.com/Jin5JJT.jpg",
"https://i.imgur.com/24euyiI.jpg",
"https://i.imgur.com/A4DLDkB.jpg",
"https://i.imgur.com/anQXEoq.jpg",
"https://i.imgur.com/paAt5t4.jpg",
"https://i.imgur.com/sEQgWJZ.jpg",
"https://i.imgur.com/tSfRBG5.jpg",
"https://i.imgur.com/GPTDvra.jpg",
"https://i.imgur.com/i9pNnd8.jpg",
"https://i.imgur.com/yIamHiD.jpg",
"https://i.imgur.com/FWGIavw.jpg",
"https://i.imgur.com/h94RR6F.jpg",
"https://i.imgur.com/NN3yBUR.jpg",
"https://i.imgur.com/OVFo3Gn.png",
"https://i.imgur.com/dtWDruL.jpg",
"https://i.imgur.com/aL25hqK.png",
"https://i.imgur.com/9GwqkI5.jpg",
"https://i.imgur.com/DxGTmws.jpg",
"https://i.imgur.com/Z4Y4yjc.jpg",
"https://i.imgur.com/oL5F6Bn.jpg",
"https://i.imgur.com/rAbYAP4.jpg",
"https://i.imgur.com/aDX9V9z.jpg",
"https://i.imgur.com/Kr6GfP4.jpg",
"https://i.imgur.com/sSHT8gi.jpg",
"https://i.imgur.com/9icnpqr.jpg",
"https://i.imgur.com/626zX3H.jpg",
"https://i.imgur.com/uVH745M.jpg",
"https://i.imgur.com/YUSoU8y.jpg",
"https://i.imgur.com/t1Xdu0v.jpg",
"https://i.imgur.com/9w2trPu.jpg",
"https://i.imgur.com/JWWphru.jpg",
"https://i.imgur.com/tnX4ADc.jpg",
"https://i.imgur.com/d1plKDq.jpg",
"https://i.imgur.com/z8MOL00.png",
"https://i.imgur.com/UQf2fLq.jpg",
"https://i.imgur.com/rqhcost.jpg",
"https://i.imgur.com/4Aqa9hN.jpg",
"https://i.imgur.com/njSomiL.jpg",
"https://i.imgur.com/OTm7uYn.jpg",
"https://i.imgur.com/eaRYDQc.jpg",
"https://i.imgur.com/VAk4Sy0.jpg",
"https://i.imgur.com/Pt0AeYr.jpg",
"https://i.imgur.com/rLhlg72.jpg",
"https://i.imgur.com/dCQ6rA4.jpg",
"https://i.imgur.com/Unn9Mib.jpg",
"https://i.imgur.com/VqlckqE.jpg",
"https://i.imgur.com/4yYSZG4.jpg",
"https://i.imgur.com/0ghysOj.jpg",
"https://i.imgur.com/9Yhmo9C.jpg",
"https://i.imgur.com/ExVdeyf.jpg",
"https://i.imgur.com/mbtuaGM.jpg",
"https://i.imgur.com/Vo8puVt.jpg",
"https://i.imgur.com/4QrvAfW.jpg",
"https://i.imgur.com/DjVbYWv.jpg",
"https://i.imgur.com/rWtox5Z.jpg",
"https://i.imgur.com/0EgzvyV.jpg",
"https://i.imgur.com/YbNdQjL.jpg",
"https://i.imgur.com/XMncyTN.jpg",
"https://i.imgur.com/YJd6p4j.jpg",
"https://i.imgur.com/HWwSXug.jpg",
"https://i.imgur.com/kKmIe6q.jpg",
"https://i.imgur.com/lmS2a65.jpg",
"https://i.imgur.com/2ZY6eeR.jpg",
"https://i.imgur.com/Br7LXN8.jpg",
"https://i.imgur.com/waZfYMo.jpg",
"https://i.imgur.com/tpIt6dq.jpg",
"https://i.imgur.com/dG6zasi.jpg",
"https://i.imgur.com/CL6WxkY.jpg",
"https://i.imgur.com/zRPEplA.jpg",
"https://i.imgur.com/xPS7gMS.jpg",
"https://i.imgur.com/iO7A4Cc.jpg",
"https://i.imgur.com/Xj0EyxJ.jpg",
"https://i.imgur.com/vRo8KEU.jpg",
"https://i.imgur.com/U7sKeTK.jpg",
"https://i.imgur.com/qd3QhoA.jpg",
"https://i.imgur.com/zB2KJJs.jpg",
"https://i.imgur.com/IxzLyvP.png",
"https://i.imgur.com/US71tYn.jpg",
"https://i.imgur.com/Id2Slnk.jpg",
"https://i.imgur.com/Qd4u2OE.jpg",
"https://i.imgur.com/CDyY9kZ.jpg",
"https://i.imgur.com/m6uKzxD.jpg",
"https://i.imgur.com/wpuTMgn.jpg",
"https://i.imgur.com/ax37AsF.jpg",
"https://i.imgur.com/hwEDKnN.jpg",
"https://i.imgur.com/fW8YAJn.jpg",
"https://i.imgur.com/fN9KSQ4.jpg",
"https://i.imgur.com/i6a3kL1.jpg",
"https://i.imgur.com/IjhHFKL.jpg",
"https://i.imgur.com/KapSnIx.jpg",
"https://i.imgur.com/p74z5Ha.jpg",
"https://i.imgur.com/vnOtIty.jpg",
"https://i.imgur.com/OglrHlA.jpg",
"https://i.imgur.com/BlLOP1t.jpg",
"https://i.imgur.com/9YMksmZ.jpg",
"https://i.imgur.com/K7l8yN1.jpg",
"https://i.imgur.com/yYmUNdq.jpg",
"https://i.imgur.com/ApmK12d.jpg",
"https://i.imgur.com/GdSVBAr.jpg",
"https://i.imgur.com/oFohrSZ.jpg",
"https://i.imgur.com/K6anhqL.jpg",
"https://i.imgur.com/4Tw6g2U.jpg",
"https://i.imgur.com/e2LWmmJ.jpg",
"https://i.imgur.com/BJq9EFM.jpg",
"https://i.imgur.com/rFoVgXj.jpg",
"https://i.imgur.com/jAbCtX2.jpg",
"https://i.imgur.com/SHJHBpy.jpg",
"https://i.imgur.com/FBUAbnA.jpg",
"https://i.imgur.com/oEgrusw.jpg",
"https://i.imgur.com/QkKaeaO.jpg",
"https://i.imgur.com/exoolPy.jpg",
"https://i.imgur.com/nhvyRhF.jpg",
"https://i.imgur.com/2M5QE8o.jpg",
"https://i.imgur.com/7QKR1jc.jpg",
"https://i.imgur.com/PteQMvo.jpg",
"https://i.imgur.com/fssrAyz.jpg",
"https://i.imgur.com/G9ZiHXe.jpg",
"https://i.imgur.com/CFxOz5A.jpg",
"https://i.imgur.com/f0D9cnj.jpg",
"https://i.imgur.com/NNVdvLb.jpg",
"https://i.imgur.com/zVwSyxE.jpg",
"https://i.imgur.com/pIoLLRW.jpg",
"https://i.imgur.com/8MTwfb7.jpg",
"https://i.imgur.com/lrMOwOi.jpg",
"https://i.imgur.com/dp8O6Nd.jpg",
"https://i.imgur.com/qVuhsNY.jpg",
"https://i.imgur.com/I3aLkmr.jpg",
"https://i.imgur.com/ICuh5ar.jpg",
"https://i.imgur.com/F4ySFP2.jpg",
"https://i.imgur.com/Fjy3wSk.jpg",
"https://i.imgur.com/PVx7Qmv.jpg",
"https://i.imgur.com/YTFlLe4.jpg",
"https://i.imgur.com/3pe3gs3.jpg",
"https://i.imgur.com/wtWWx7d.jpg",
"https://i.imgur.com/DOJBWkB.jpg",
"https://i.imgur.com/qRsVmXj.jpg",
"https://i.imgur.com/iRzK33A.jpg",
"https://i.imgur.com/NWgVcmZ.jpg",
"https://i.imgur.com/gouxA4p.jpg",
"https://i.imgur.com/ZN96U7J.jpg",
"https://i.imgur.com/Q2WpiNd.jpg",
"https://i.imgur.com/LPHxx5N.jpg",
"https://i.imgur.com/RtNV4Lh.jpg",
"https://i.imgur.com/u19QQjV.jpg",
"https://i.imgur.com/dFmGnQm.jpg",
"https://i.imgur.com/iT1ixKj.jpg",
"https://i.imgur.com/cArQg5v.jpg",
"https://i.imgur.com/4lowoWj.jpg",
"https://i.imgur.com/GWSfqIL.jpg",
"https://i.imgur.com/HPA7XlW.jpg",
"https://i.imgur.com/aH9RnQF.jpg",
"https://i.imgur.com/evRhADX.jpg",
"https://i.imgur.com/z9jiCuY.jpg",
"https://i.imgur.com/ByFeG9X.jpg",
"https://i.imgur.com/TIHmT2B.jpg",
"https://i.imgur.com/FLy5bZy.jpg",
"https://i.imgur.com/C7KcTQv.jpg",
"https://i.imgur.com/xKqQh8X.jpg",
"https://i.imgur.com/g11OFVv.jpg",
"https://i.imgur.com/4ECI9LU.jpg",
  ];
  var max = Math.floor(Math.random() * 6);  
var min = Math.floor(Math.random() * 2);
  var data = await Currencies.getData(event.senderID);
  var exp =  data.exp;
  var money = data.money
      if(money < 1000) api.sendMessage("Bạn cần 1000 đô để xem ảnh ?",event.threadID,event.messageID)
          else {
   Currencies.setData(event.senderID, options = {money: money - 1000})
   var callback = () => api.sendMessage({body:`Ảnh Khánh Huyền\nSố Ảnh: ${link.length}\n-1000 đô !`,attachment: fs.createReadStream(__dirname + "/cache/57.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/57.jpg"), event.messageID); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)] + (max - min))).pipe(fs.createWriteStream(__dirname+"/cache/57.jpg")).on("close",() => callback());
     }
   };
