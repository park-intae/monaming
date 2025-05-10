<template>
    <div id="footer">
        <div class="foot">
            <!-- 🔹 FOOT POP 모달 영역 -->
            <div class="foot_pop" ref="footPopRef" :style="{ display: modalStore.isOpen ? 'block' : 'none' }">
                <div class="title" @click.self="closeModal">
                    {{ modalStore.contentType === 'preInfo' ? '개인정보처리방침' : '이메일무단수집거부' }}
                </div>
                <div class="textarea">
                    <div v-show="modalStore.contentType === 'preInfo'">
                        <p>개인정보처리방침안내입니다</p>
                        <div>국무회의는 대통령·국무총리와 15인 이상 30인 이하의 국무위원으로 구성한다. 일반사면을 명하려면 국회의 동의를 얻어야 한다. 모든 국민은 종교의 자유를
                            가진다.</div>
                        <br />
                        <br />
                        <div>대통령은 법률안의 일부에 대하여 또는 법률안을 수정하여 재의를 요구할 수 없다. 국민경제의 발전을 위한 중요정책의 수립에 관하여 대통령의 자문에 응하기
                            위하여 국민경제자문회의를 둘 수 있다.
                        </div>
                        <br />
                        <div>공개하지 아니한 회의내용의 공표에 관하여는 법률이 정하는 바에 의한다. 의원을 제명하려면 국회재적의원 3분의 2 이상의 찬성이 있어야 한다. 전직대통령의
                            신분과 예우에 관하여는 법률로 정한다.
                        </div>
                        <br />
                        <div>대통령은 법률이 정하는 바에 의하여 훈장 기타의 영전을 수여한다. 형사피의자 또는 형사피고인으로서 구금되었던 자가 법률이 정하는 불기소처분을 받거나
                            무죄판결을 받은 때에는 법률이 정하는 바에 의하여 국가에 정당한 보상을 청구할 수 있다.
                        </div>
                        <br />
                        <div>국무총리 또는 행정각부의 장은 소관사무에 관하여 법률이나 대통령령의 위임 또는 직권으로 총리령 또는 부령을 발할 수 있다. 법률이 헌법에 위반되는 여부가
                            재판의 전제가 된 경우에는 법원은 헌법재판소에 제청하여 그 심판에 의하여 재판한다.
                        </div>
                        <br />
                        <div>교육의 자주성·전문성·정치적 중립성 및 대학의 자율성은 법률이 정하는 바에 의하여 보장된다. 민주평화통일자문회의의 조직·직무범위 기타 필요한 사항은 법률로
                            정한다.
                        </div>
                        <br />
                        <div>공무원의 신분과 정치적 중립성은 법률이 정하는 바에 의하여 보장된다. 국가는 전통문화의 계승·발전과 민족문화의 창달에 노력하여야 한다. 모든 국민은
                            소급입법에 의하여 참정권의 제한을 받거나 재산권을 박탈당하지 아니한다.
                        </div>
                        <br />
                        <div>혼인과 가족생활은 개인의 존엄과 양성의 평등을 기초로 성립되고 유지되어야 하며, 국가는 이를 보장한다. 선거에 있어서 최고득표자가 2인 이상인 때에는 국회의
                            재적의원 과반수가 출석한 공개회의에서 다수표를 얻은 자를 당선자로 한다.
                        </div>
                        <br />
                        <div>군인 또는 군무원이 아닌 국민은 대한민국의 영역안에서는 중대한 군사상 기밀·초병·초소·유독음식물공급·포로·군용물에 관한 죄중 법률이 정한 경우와 비상계엄이
                            선포된 경우를 제외하고는 군사법원의 재판을 받지 아니한다.
                        </div>

                    </div>
                    <div v-show="modalStore.contentType === 'mailReduc'">
                        이메일 무단 수집 거부 안내입니다.
                    </div>
                </div>
                <div class="btn_close">
                    <a @click="closeModal">CLOSE</a>
                </div>
            </div>
            <!-- 🔹 FOOTER 상단 -->
            <div class="foot_top">
                <h1>
                    <img src="/img/foot_logo.jpg" alt="logo" />
                </h1>
                <ul class="fm">
                    <li v-for="(item, index) in fm" :key="index">
                        <a v-if="item.link" :href="item.link">
                            {{ item.name }}
                        </a>
                        <a v-else href="#" @click.prevent="handleClick(item.type)">
                            {{ item.name }}
                        </a>
                    </li>
                </ul>
            </div>
            <!-- 🔹 FOOTER 하단 -->
            <div class="foot_btm">
                <div class="info">
                    <p class="tit">INFO</p>
                    <div class="address">
                        <div v-for="(item, index) in info" :key="index">
                            <span>{{ item.name }}</span> : <span>{{ item.contents }}</span>
                        </div>
                    </div>
                    <p>COPYRIGHT(C) MONAMI.CO.,LTD. ALL RIGHTS RESERVED.</p>
                </div>
                <div class="CC">
                    <div class="CC_tit">CUSTOMER CENTER</div>
                    <div class="CC_tel">000-000-0000</div>
                    <button class="kakao_btn">카카오톡 문의></button>
                </div>
                <div class="family_site">
                    <div class="dropdown" :class="{ open: isFmDropdownOpen }" @click.stop="toggleFmDropdown">
                        <div class="tit">FAMILY SITE</div>
                        <ul class="dropdown-contents">
                            <li v-for="(item, index) in familySite" :key="index">
                                <a :href="item.link">{{ item.name }}</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { useUIStore } from '../stores/uiStore';
import { storeToRefs } from 'pinia';
import { useModalStore } from '@/stores/modalStore';

const modalStore = useModalStore();

const fm = [
    { name: '회사소개', link: '#' },
    { name: '개인정보처리방침', type: 'preInfo' },
    { name: '이메일무단수집거부', type: 'mailReduc' },
];
const info = [
    { name: 'ADDRESS', contents: '경기도 용인시 수지구 손곡로 17' },
    { name: 'TEL', contents: '031-216-0153' },
    { name: 'FAX', contents: '031-270-5154' }
];
const familySite = [
    { name: '모나미몰', link: '#' },
    { name: '모나르떼', link: '#' },
    { name: '모나미 컨셉스토어', link: '#' },
    { name: '주식회사 항소', link: '#' },
    { name: '모나미 미술대회', link: '#' },
    { name: '모나미 기업서비스', link: '#' },
    { name: '모나미코스메틱', link: '#' },
];

// 모달 관련
const uiStore = useUIStore();
const { isFmDropdownOpen } = storeToRefs(uiStore); // ✨ 반응형으로 꺼냄

const { isOpen, contentType } = storeToRefs(modalStore);

function handleClick(type) {
    modalStore.open(type);
}

function closeModal() {
    modalStore.close();
}

function handleOutsideClick(e) {
    if (footPopRef.value && !footPopRef.value.contains(e.target)) {
        closeModal();
    }
}

</script>

<style>
#footer {
    width: 100%;
    position: relative;
    background-color: #111111;
    padding: 60px 0 65px;
}
</style>