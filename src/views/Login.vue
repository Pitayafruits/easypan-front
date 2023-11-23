<template>
    <div class="login-body">
        <div class="bg"></div>
        <div class="login-panel">
            <el-form class="login-register" :model="FormData" :rules="rules" ref="formDataRef" @submit.prevent>
                <div class="login-title">仿百度云盘</div>
                <!-- input输入 -->
                <el-form-item prop="email">
                    <el-input size="large" clearable placeholder="请输入邮箱" v-model.trim="formData.email" maxLength="150">
                        <template #prefix>
                            <span class="iconfont icon-account"></span>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 登录密码 -->
                <el-form-item prop="password" v-if="opType == 1">
                    <el-input type="password" size="large" placeholder="请输入密码" v-model.trim="formData.password"
                        show-password>
                        <template #prefix>
                            <span class="iconfont icon-password"></span>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 注册 -->
                <div v-if="opType == 0 || opType == 2">
                    <el-form-item prop="emailCode">
                        <div class="send-emali-panel">
                            <el-input v-model.trim="formData.emailCode" placeholder="请输入邮箱验证码" size="large">
                                <template #prefix>
                                    <span class="iconfont icon-checkcode"></span>
                                </template>
                            </el-input>
                            <el-button class="send-mail-btn" type="primary" size="large">
                                获取验证码
                            </el-button>
                        </div>
                        <el-popover placement="left" :width="500" trigger="click">
                            <div>
                                <p>1、在邮箱中查找邮箱验证码</p>
                                <p>2、在邮箱头像->设置->反垃圾->白名单->设置邮件地址白名单</p>
                                <p>3、将邮箱【pitayacc@qq.com】添加到白名单不知道怎么设置？</p>
                            </div>
                            <template #reference>
                                <span class="a-link" :style="{ 'font-size': '14px' }">未收到邮箱验证码?</span>
                            </template>
                        </el-popover>
                    </el-form-item>
                    <!-- 昵称 -->
                    <el-form-item peop="nicekName" size="large" v-if="opType == 0">
                        <el-input v-model.trim="formData.nickeName" placeholder="请输入昵称" size="large" maxLength="20">
                            <template #prefix>
                                <span class="iconfont icon-account"></span>
                            </template>
                        </el-input>
                    </el-form-item>
                    <!-- 注册密码 找回密码 -->
                    <el-form-item prop="registerPassword">
                        <el-input v-model.trim="formData.registerPassword" placeholder="请输入密码" size="large" type="password">
                            <template #prefix>
                                <span class="iconfont icon-password"></span>
                            </template>
                        </el-input>
                    </el-form-item>
                    <!-- 重复密码 -->
                    <el-form-item prop="reRegisterPassword">
                        <el-input v-model.trim="formData.reRegisterPassword" placeholder="请再次输入密码" size="large"
                            type="password">
                            <template #prefix>
                                <span class="iconfont icon-password"></span>
                            </template>
                        </el-input>
                    </el-form-item>
                </div>
                <!-- 验证码 -->
                <el-form-item prop="checkCode">
                    <div class="check-code-panel">
                        <el-input size="large" placeholder="请输入验证码" v-model.trim="formData.checkCode">
                            <template #prefix>
                                <span class="iconfont icon-checkcode"></span>
                            </template>
                        </el-input>
                        <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode(0)" />
                    </div>
                </el-form-item>
                <!-- 登录 -->
                <el-form-item v-if="opType == 1">
                    <div class="rememberme-panel">
                        <el-checkbox v-model="formData.rememberMe">记住我</el-checkbox>
                    </div>
                    <div class="no-account">
                        <a href="javascript:void(0)" class="a-link" @click="showPanel(2)">忘记密码？</a>
                        <a href="javascript:void(0)" class="a-link" @click="showPanel(0)">没有账号？</a>
                    </div>
                </el-form-item>
                <!-- 找回密码 -->
                <el-form-item v-if="opType == 2">
                    <a href="javascript:void(0)" class="a-link" @click="showPanel(1)">去登陆？</a>
                </el-form-item>
                <!-- 注册 -->
                <el-form-item v-if="opType == 0">
                    <a href="javascript:void(0)" class="a-link" @click="showPanel(1)">去登陆？</a>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button type="primary" class="op-btn" size="large">
                        <span v-if="opType == 0">注册</span>
                        <span v-if="opType == 1">登录</span>
                        <span v-if="opType == 2">重置密码</span>
                    </el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
const { proxy } = getCurrentInstance();

const api = {
    checkCode: "/api/user/checkCode",
};

//操作类型 0:注册 1：登录 2：重置密码
const opType = ref(1);

const showPanel = (type) => {
    opType.value = type;
};

const formData = ref({});
const formDataRef = ref();
const rules = {
    title: [{ required: true, message: '请输入内容' }]
};

const checkCodeUrl = ref(api.checkCode);

const changeCheckCode = (type) => {
    checkCodeUrl.value = api.checkCode + "?type=" + type + "&time=" + new Date().getTime();
}
</script>
<style lang="scss" scoped>
.login-body {
    height: calc(100vh);
    // 把背景图像扩展至足够大，以使背景图像完全覆盖背景区域。
    background-size: cover;
    background: url("../assets/login_bg.jpg");
    display: flex;

    .bg {
        flex: 1;
        background-size: cover;
        background-position: center;
        background-size: 800px;
        background-repeat: no-repeat;
        background-image: url("../assets/login_img.png");
    }

    .login-panel {
        width: 430px;
        margin-right: 15%;
        margin-top: calc((100vh - 500px) / 2);

        .login-register {
            padding: 25px;
            background: #fff;
            border-radius: 5px;

            .login-title {
                text-align: center;
                font-size: 18px;
                font-weight: bold;
                margin-bottom: 20px;
            }

            .send-emali-panel {
                display: flex;
                width: 100%;
                justify-content: space-between;

                .send-mail-btn {
                    margin-left: 5px;
                }
            }

            .rememberme-panel {
                width: 100%;
            }

            .no-account {
                width: 100%;
                display: flex;
                justify-content: space-between;
            }

            .op-btn {
                width: 100%;
            }
        }
    }

    .check-code-panel {
        width: 100%;
        display: flex;

        .check-code {
            margin-left: 5px;
            cursor: pointer;
        }
    }

    .login-btn-qq {
        margin-top: 20px;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        img {
            cursor: pointer;
            margin-left: 10px;
            width: 20px;
        }
    }
}
</style>