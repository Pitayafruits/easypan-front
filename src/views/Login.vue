<template>
    <div class="login-body">
        <div class="bg"></div>
        <div class="login-panel">
            <el-form class="login-register" :model="FormData" :rules="rules" ref="formDataRef" label-width="80px"
                @submit.prevent>
                <div class="login-title">仿百度云盘</div>
                <!-- input输入 -->
                <el-form-item prop="email">
                    <el-input size="large" clearable placeholder="请输入邮箱" v-model="FormData.email"
                        maxLength="150"></el-input>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>
<script setup>
import { ref, reactive, getCurrentInstance, nextTick } from "vue"
const { proxy } = getCurrentInstance();

const FormData = ref({});
const formDataRef = ref();
const rules = {
    title: [{ required: true, message: '请输入内容' }]
};
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