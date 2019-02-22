/*页面其他调用代码*/
layui.use('form', function(){
  var form = layui.form; //只有执行了这一步，部分表单元素才会自动修饰成功
});
layui.use('layedit', function(){
  var layedit = layui.layedit
  ,$ = layui.jquery;
  
  //构建一个默认的编辑器
  var index = layedit.build('LAY_demo1');
});

$(function() {
	$(".tags_enter").blur(function() { //焦点失去触发 
		var txtvalue=$(this).val().trim();
		if(txtvalue!=''){
			addTag($(this));
		}
	}).keydown(function(event) {
		var key_code = event.keyCode;
		var txtvalue=$(this).val().trim(); 
		if (key_code == 13&& txtvalue != '') { //enter
			addTag($(this));
		}
		if (key_code == 32 && txtvalue!='') { //space
			addTag($(this));
		}
	});
	$(".close").live("click", function() {
		$(this).parent(".tag").remove();
	});
})
function addTag(obj) {
	var tag = obj.val();
	if (tag != '') {
		var i = 0;
		$('.tag').each(function() {
			if ($(this).text() == tag + "×") {
				$(this).addClass("tag-warning");
				setTimeout("removeWarning()", 400);
				i++;
			}
		})
		obj.val('');
		if (i > 0) { //说明有重复
			return false;
		}
		obj.before("<span class='tag'>" + tag + "<button class='close' type='button'>×</button></span>"); //添加标签
	}
}
function removeWarning() {
	$(".tag-warning").removeClass("tag-warning");
}
pca.init('select[name=P1]', 'select[name=C1]', 'select[name=A1]');
$(document).ready(function () {

    $('#data .input-daterange').datepicker({
        keyboardNavigation: false,
        forceParse: false,
        autoclose: true
    });

});
