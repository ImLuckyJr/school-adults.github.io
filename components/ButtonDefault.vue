<template>
    <div
        class="btn"
        :class="getClasses"
    >
        <button
            v-if="label"
            type="button"
        >{{ label }}
        </button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    name:     'ButtonDefault',
    props:    {
        circle: {
            type:    Boolean,
            default: false,
        },
        
        buttonClasses: {
            type:    String,
            default: '',
        },
        
        label: {
            type:    String,
            default: '',
        },
        
        align: {
            type:      String,
            default:   'center',
            validator: v => [ 'left', 'center', 'right' ].includes(v),
        },
    },
    computed: {
        getClasses() {
            const classes = {};
            this.buttonClasses.split(' ').forEach(v => {
                classes[v] = true;
            });
            classes[`btn-align-${ this.align }`] = true;
            classes['btn--round'] = this.round;
            classes['dark-border'] = this.darkBorder;
            
            return classes;
        },
    },
};
</script>

<style scoped>

</style>