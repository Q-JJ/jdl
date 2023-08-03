<template>
    <div class="fillcontain" ref="fillcontain">
        <div class="contain" ref="contain">
      
        </div>
    </div>
</template>

<script>
   import * as mutils from '@/utils/mUtils'

    export default {
        data(){
             // 附带callback(),是在明确通过验证的情况下去掉输入框上的loading
            let validateEmail = (rule, value, callback) => {
                if(value == ''){
                    callback(new Error('请输入邮箱~'));
                    return;
                }
                let emailRegex = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
                if (!emailRegex.test(value)) {
                    callback(new Error('邮箱格式不正确！'))
                } else {
                    callback();
                }
            };
            let validatePhone = (rule, value, callback) => {
                if(value == ''){
                    callback(new Error('请输入手机号码~'));
                }{
                    let phoneRegex = /^1[34578]\d{9}$/;
                    if (!phoneRegex.test(value)) {
                        callback(new Error('手机号码格式不正确！'))
                    } else {
                        callback();
                    }
                }
            };
            // validateField:对部分表单字段进行校验的方法
            let validateNewpassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入新密码'));
                } else {
                    if (this.pwdForm.surepassword !== '') {
                        this.$refs.pwdForm.validateField('surepassword');
                    }
                    callback();
                }
            };
            let validateSurepassword = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入确认密码'));
                } else if (value !== this.pwdForm.newpassword) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                   callback();
                }
            };
            return {
               infoForm:{
                   username:'',
                   nickname:'',
                   touziyear:'',
                   email:'',
                   telphone:''
               },
               pwdForm:{
                   password:'',
                   newpassword:'',
                   surepassword:''
               },
               phoneForm:{
                   phone:'',
                   baseType:[],
                   changeType:[]
               },
               infoRules: {
                    nickname: [
                        { required: true, message: '请输入昵称', trigger: 'blur' },
                        { min: 2, max: 8, message: '长度在 2 到 8 个字符', trigger: 'blur' }
                    ],
                    touziyear: [
                        { required: true, message: '请选择投资年限', trigger: 'change' }
                    ],
                    email: [
                        {required: true,validator: validateEmail,trigger: 'blur'}
                    ],
                    telphone: [
                        {required: true,validator: validatePhone, trigger: 'blur' },
                    ],
               },
               pwdRules: {
                    password: [
                        { required: true, message: '请输入原密码', trigger: 'blur' },
                    ],
                    newpassword: [
                        { required: true, validator:validateNewpassword, trigger: 'blur' },
                    ],
                    surepassword: [
                        { required: true, validator:validateSurepassword, trigger: 'blur' },
                    ],
               },
               phoneRules:{
                   phone: [
                        {required: true,validator: validatePhone, trigger: 'blur' },
                   ],
                   baseType: [
                        { type: 'array', required: true, message: '请至少选择一个基础短信服务', trigger: 'change' }
                   ],
                   changeType: [
                        { type: 'array', required: true, message: '请至少选择一个可选短信服务', trigger: 'change' }
                   ],
               },
             
            };
           

        },
        created(){
           
        },
      	mounted() {
            // mutils.setContentHeight(this,this.$refs.fillcontain,170);
	    },
        methods: {
            showMessage(type,message){
                this.$message({
                    type: type,
                    message: message
                });
            },
            showUsername(){
                let userinfo = mutils.getStore('userinfo');
                this.infoForm.username = userinfo.username;
            },
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        if(formName == 'pwdForm'){
                            this.showMessage('success','修改密码成功~');
                        }else if(formName == 'infoForm'){ // 判断手机服务是否为空
                            this.phoneForm.phone = this.infoForm.telphone;
                            for(let key in this.phoneForm){
                                if(this.phoneForm[key] == ''){
                                    this.showMessage('warning','请您选择手机服务~');
                                    return;
                                }
                            }
                        }else if(formName == 'phoneForm'){// 判断修改信息是否为空
                            this.infoForm.telphone = this.phoneForm.phone;
                            for(let key in this.infoForm){
                                if(this.infoForm[key] == ''){
                                    this.showMessage('warning','请您修改相关信息~');
                                    return;
                                }
                            }
                        }
                        //保存修改的相关信息
						let userinfo = this.infoForm;
                        let phoneinfo = this.phoneForm;
						let userData = Object.assign(userinfo, phoneinfo);
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            },
        }
    }
</script>

<style lang="less" scoped> 


.fillcontain{
        height: calc(100% - 30px);
    }
    .contain{
        border-radius: 5px;
        height: 100%;
        background: #fff;
        
    }
</style>


