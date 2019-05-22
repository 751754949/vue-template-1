var _a;
//所以组件继承自BASIC
export var basic = {
  input: {
    component: "el-input",
    attrs: {
      placeholder: "请输入",
      clearable: true
    }
  },
  select: {
    component: "base-select",
    attrs: {
      placeholder: "请选择",
      clearable: true
    }
  },
  date: {
    component: "el-date-picker",
    attrs: ((_a = {
      placeholder: "选择日期",
      clearable: true,
      type: "date",
      format: "yyyy/MM/dd"
    }),
    (_a["value-format"] = "yyyy/MM/dd"),
    _a)
  },
  radio: {
    component: "base-radio-group",
    value: [],
    attrs: {
      placeholder: "选择",
      clearable: true
    }
  },
  checkbox: {
    component: "el-checkbox"
  },
  "checkbox-group": {
    component: "base-checkbox-group"
  },
  cascader: {
    component: "el-cascader",
    attrs: {
      placeholder: "请选择",
      clearable: true
    }
  },
  textarea: {
    component: "el-input",
    attrs: {
      type: "textarea"
    }
  }
};
