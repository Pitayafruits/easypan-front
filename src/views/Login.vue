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
                <el-form-item prop="password">
                    <el-input type="password" size="large" placeholder="请输入密码" v-model="formData.password" show-password>
                        <template #prefix>
                            <span class="iconfont icon-password"></span>
                        </template>
                    </el-input>
                </el-form-item>
                <!-- 验证码 -->
                <el-form-item prop="checkCode">
                    <div class="check-code-panel">
                        <el-input size="large" placeholder="请输入验证码" v-model="formData.checkCode">
                            <template #prefix>
                                <span class="iconfont icon-checkcode"></span>
                            </template>
                        </el-input>
                        <img :src="checkCodeUrl" class="check-code" @click="changeCheckCode(0)" />
                    </div>
                </el-form-item>
                <!-- 功能提示 -->
                <el-form-item>
                    <div class="rememberme-panel">
                        <el-checkbox v-model="formData.rememberMe">记住我</el-checkbox>
                    </div>
                    <div class="no-account">
                        <a href="javascript:void(0)" class="a-link">忘记密码？</a>
                        <a href="javascript:void(0)" class="a-link">没有账号</a>
                    </div>
                </el-form-item>
                <!-- 登录按钮 -->
                <el-form-item>
                    <el-button type="primary" class="op-btn" size="large">注册</el-button>
                </el-form-item>

            </el-form>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
const { proxy } = getCurrentInstance();

const api = {
    checkCode: "/api/checkCode",
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