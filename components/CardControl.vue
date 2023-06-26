<template>
  <div class="control">
    <div class="control__icon" @click="increment">
      <object
        type="image/svg+xml"
        data="/icons/plus.svg"
        width="17"
        height="17"
        class="icon"
      ></object>
    </div>
    <div class="control__icon minus" @click="decrement">
      <object
        type="image/svg+xml"
        data="/icons/minus.svg"
        width="9"
        height="9"
        class="icon"
      ></object>
    </div>
    <div class="control__value">{{ quantity }}</div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';

const props = withDefaults(
  defineProps<{
    modelValue: number;
  }>(),
  {
    modelValue: 0,
  },
);

const emit = defineEmits(['update:modelValue']);

const quantity = ref(0);
quantity.value = props.modelValue;

const increment = () => {
  quantity.value += 1;
  emit('update:modelValue', quantity.value);
};

const decrement = () => {
  if (quantity.value <= 0) {
    return;
  }
  quantity.value -= 1;
  emit('update:modelValue', quantity.value);
};
</script>

<style lang="scss" scoped>
.control {
  display: flex;
  align-items: center;

  &__icon {
    cursor: pointer;
    width: 17px;
    height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s linear;

    &:hover {
      background-color: #e6e2e2;
    }

    .icon {
      pointer-events: none;
    }
  }

  &__value {
    margin-left: 10px;
    font-size: 10px;
    font-weight: 700;
  }
}
</style>
