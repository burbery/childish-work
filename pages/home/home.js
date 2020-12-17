Page({
  data:{
    Mone:true,
    text:"一个凉风习习的午后，你正在爬山，此时你忽然看见路边出现了一块废铁，你决定："
  },
m(){
    this.setData({
      Mone:false,
      Aone:false,
      text:'你继续爬山，不一会儿你看到一只奇怪的兔子从你面前跑过，你决定：',
      Mtwo:true,
    })
  },
  mm(){
    this.setData({
      Mtwo:false,
      Bone:false,
      text:'你继续爬山，突然你踩到一个软软的东西，定睛一看，路上趴着一个人，你决定：',
      Mthree:true,
    })
  },
  mmm(){
    this.setData({
      Mthree:false,
      Cone:false,
      text:'其实你今天爬山就是为了自杀，你对生活彻底失望了，对山路上的各种怪异现象不理不睬，静静地爬到了山顶，跳了下去，恭喜你自杀成功！',
      Mend:true,
    })
  },
  mclickMe(){
    wx.showModal({
      title:"True ending:你看我还有机会吗？",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Mend:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  a(){
    this.setData({
      Mone:false,
      text:'你发现那并不是铁，而是一种叫不出名字的金属，你把它拿起来，发现它在闪光，此时你听到一个声音：“你他娘的就是老子的master吗？”，你：',
      Aone:true,
    })
  },
 aend(){
    this.setData({
      Aone:false,
      text:'然后你参加了圣杯战争，练就了吟唱技能，加入了德云社收获万千迷妹',
      Aend:true,
    })
  },
 aclickMe(){
    wx.showModal({
      title:"Normal ending:您吃了吗？",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Aend:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  b(){
    this.setData({
      Mtwo:false,
      text:'你发现从兔子身上掉下来一块怀表，你抬头看见兔子正在跑远，此时你发现这只兔子头上有一顶帽子，你决定：',
      Bone:true,
    })
  },
  bb(){
    this.setData({
      Bone:false,
      text:'你从兔子洞掉了下去！毫发无损地掉到底后你发现面前有三条路，你决定走：',
      Btwo:true,
    })
  },
  bbb(){
    this.setData({
      Btwo:false,
      text:'你进入了宫殿，发现自己降维了，你表面慌得一批，内心稳如老狗，决定：',
      Bthree:true,
    })
  },
  bbbendOne(){
    this.setData({
      Btwo:false,
      text:'你看到了六个小孩，其中一个女孩笑着流着泪说：“面码...被找到了”，此时ED响起，你泪如泉涌，说：这不是爱丽丝梦游仙境的路，',
      Bendone:true,
    })
  },
  bbbendTwo(){
    this.setData({
      Btwo:false,
      text:'你看到一群人在给一个穿得像扑克牌的女人化妆，你们面面相觑。',
      Bendtwo:true,
    })
  },
  bbbendThree(){
    this.setData({
      Bthree:false,
      text:'你说：“陛下我叫达拉崩吧斑得贝迪卜多比鲁翁”...经过一番饶舌，你最终打败了恶龙，和公主幸福地生活在了一起',
      Bendthree:true,
    })
  },
  bbbendFour(){
    this.setData({
      Bthree:false,
      text:'你听到：“既然你诚心诚意地发问了，我们就大发慈悲地告诉你，为了防止世界被破坏，为了守护世界的和平，贯彻爱与真实的邪恶，可爱又迷人的反派角色，武藏！小次郎！我们是穿梭在银河的火箭队，白洞，白色的明天在等着我们。”“把皮卡丘交出来喵！”',
      Bendfour:true,
    })
  },
  bbbendFive(){
    this.setData({
      Bthree:false,
      text:'爱丽丝梦游仙境流程太长此处略，总之，你拯救了梦幻世界，找到了人生的意义，然后发现这次经历是你的朋友为你策划的，你很感动',
      Bendfive:true,
    })
  },
  boneclickMe(){
    wx.showModal({
      title:"Normal ending:我们仍未知道那天所看见的花的名字",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Bendone:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  btwoclickMe(){
    wx.showModal({
      title:"Normal ending:童话里都是骗人的",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Bendtwo:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  }, 
   bthreeclickMe(){
    wx.showModal({
      title:"Normal ending:我不想再念一遍QAQ",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Bendthree:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  bfourclickMe(){
    wx.showModal({
      title:"Normal ending:就决定是你了！",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Bendfour:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  bfiveclickMe(){
    wx.showModal({
      title:"Happy ending：摆脱抑郁，热爱生活",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Bendfive:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  c(){
    this.setData({
      Mthree:false,
      text:'他挣扎着站了起来，说：“你不要管我，我要成为真正的绅士。”',
      Cone:true,
    })
  },
  cc(){
    this.setData({
      Cone:false,
      text:'他涨红了脸，说“窃书不能算偷......读书人的事，能算偷吗？”，紧接着他又说：“我考你一考，茴香豆的茴字，怎样写的？”',
      Ctwo:true,
    })
  },
  ccc(){
    this.setData({
      Ctwo:false,
      text:'只见那人大喜过望，说道：“关某誓与兄患难与共，终身相伴，生死相随！”',
      Cthree:true,
    })
  },
  cccc(){
    this.setData({
      Cthree:false,
      text:'那人激情澎湃，抑扬顿挫：“长风破浪会有时！”',
      Cfour:true,
    })
  },
  ccccc(){
    this.setData({
      Cfour:false,
      text:'只见那人手舞足蹈，激动异常，问：“来者何人？”',
      Cfive:true,
    })
  },
  ccrestOne(){
    this.setData({
      Ctwo:false,
      text:'背错了！打手心！',
      Crestone:true,
    })
  },
  ccrestTwo(){
    this.setData({
      Cthree:false,
      text:'这是送分题啊同学们！',
      Cresttwo:true,
    })
  },
  crestoneclickMe(){
    wx.showModal({
      title:"不许哭！",
      content:"(要返回上一步吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Crestone:false,
          text:'他涨红了脸，说“窃书不能算偷......读书人的事，能算偷吗？”，紧接着他又说：“我考你一考，茴香豆的茴字，怎样写的？”',
          Ctwo:true,
        })
      }
    })
  }, 
  cresttwoclickMe(){
    wx.showModal({
      title:"少壮不努力，老大徒伤悲，balabala",
      content:"(要返回上一步吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Cresttwo:false,
          text:'他涨红了脸，说“窃书不能算偷......读书人的事，能算偷吗？”，紧接着他又说：“我考你一考，茴香豆的茴字，怎样写的？”',
          Cthree:true,
        })
      }
    })
  },
  ccendOne(){
    this.setData({
      Cone:false,
      text:'他热泪盈眶，握住你的手说：“亲人啊！”',
      Cendone:true,
    })
  },
  ccendTwo(){
    this.setData({
      Cfive:false,
      text:'他喊道：“我叫你一声你敢答应吗？行者孙！”',
      Cendtwo:true,
    })
  },
  ccendThree(){
    this.setData({
      Cfive:false,
      text:'他说：“少年，我看你骨骼惊奇，来参加中国诗词大会吧！”',
      Cendthree:true,
    })
  },
 coneclickMe(){
    wx.showModal({
      title:"Normal ending：仙道波纹疾走！",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Cendone:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  ctwoclickMe(){
    wx.showModal({
      title:"Normal ending：白龙马，蹄儿朝西~~",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Cendtwo:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
  cthreeclickMe(){
    wx.showModal({
      title:"Happy ending：传承优秀传统文化，做社会主义接班人",
      content:"(请问要重新开始游戏吗？)",
      success: res =>{
        if (res.confirm) 
        this.setData({
          Mone:true,
          Cendthree:false,
          text:"你正在爬山，此时你忽然看见路边出现了一块废铁，你决定：",
        })
      }
    })
  },
})
