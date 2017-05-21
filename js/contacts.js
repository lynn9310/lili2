function initMap(){
        createMap();//创建地图
        setMapEvent();//设置地图事件
        addMapControl();//向地图添加控件
    }
    
    //创建地图函数：
    function createMap(){
        var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
        var point = new BMap.Point(116.395645,39.929986);//定义一个中心点坐标
        map.centerAndZoom(point,12);//设定地图的中心点和坐标并将地图显示在地图容器中
        window.map = map;//将map变量存储在全局
    }
    
    //地图事件设置函数：
    function setMapEvent(){
        map.disableDragging();//禁用地图拖拽事件
        map.enableScrollWheelZoom();//启用地图滚轮放大缩小
        map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
        map.disableKeyboard();//禁用键盘上下左右键移动地图，默认禁用(可不写)
    }
    
    //地图控件添加函数：
    function addMapControl(){
        //向地图中添加缩放控件
    var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_TOP_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});
    map.addControl(ctrl_nav);
        //向地图中添加缩略图控件
    var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});
    map.addControl(ctrl_ove);
        //向地图中添加比例尺控件
    var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
    map.addControl(ctrl_sca);
    }
    
    
    initMap();//创建和初始化地图


    Name.onfocus=function(){
        if(this.value==0|this.value=='Name'){
            this.value='';
        }
    }
    Name.onblur=function(){
        if(this.value==0){
            this.value='Name';
        }
    }
    Email.onfocus=function(){
        if(this.value==0|this.value=='Email'){
            this.value='';
        }
    }
    Email.onblur=function(){
        if(this.value==0){
            this.value='Email';
        }
    }
    Telephone.onfocus=function(){
        if(this.value==0|this.value=='Telephone'){
            this.value='';
        }
    }
    Telephone.onblur=function(){
        if(this.value==0){
            this.value='Telephone';
        }
    }
    Message.onfocus=function(){
        if(this.value==0|this.value=='Message...'){
            this.value='';
        }
    }
    Message.onblur=function(){
        if(this.value==0){
            this.value='Message...';
        }
    }
    conSubmit.onclick=function(){
        var namee=document.getElementById('Name').value;
        var emaill=document.getElementById('Email').value;
        var telephonee=document.getElementById('Telephone').value;
        var textt=document.getElementById('Message').value;
        if(!/\w{6,12}/.test(namee)){
            alert('请输入正确的ID')
        }else if (!/^\w{1,20}@[a-zA-Z0-9]{2,5}((\.com)$|(\.cn)$)/.test(emaill)){
            alert("请输入正确的邮箱格式");
            }else if(!/^1[34578]\d{9}$/.test(telephonee)){
                alert('请输入正确的手机号码')
                }else if(textt==''|textt=='Message...'){
                    alert("内容不能为空")
                    }else{
                        alert("提交成功！")
                    }
                    }