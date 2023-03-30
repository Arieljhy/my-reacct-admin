import { Button, Form, Input, Select, Space, message } from "antd";
import { useEffect, useState , useMemo } from "react";
import "./index.less";

const BasicForm = () => {
	const { Option } = Select;
	const [form] = Form.useForm();

	const onGenderChange = (value: string) => {
		switch (value) {
			case "male":
				form.setFieldsValue({ note: "Hi, man!" });
				return;
			case "female":
				form.setFieldsValue({ note: "Hi, lady!" });
				return;
			case "other":
				form.setFieldsValue({ note: "Hi there!" });
		}
	};

	const onFinish = (values: any) => {
		message.success("提交的数据为 : " + JSON.stringify(values));
		console.log(JSON.stringify(values));
	};

	const onReset = () => {
		form.resetFields();
	};

	const onFill = () => {
		form.setFieldsValue({
			user: "mark",
			note: "Hello world!",
			gender: "male"
		});
	};

	const [num, setNum] = useState(1);
	const [count, setCount] = useState(0);
	const [show, setShow] = useState(false);
	const arr = [
		{ id: 1, name: 'boss', pid: 3 },
		{ id: 2, name: 'lily', pid: 1 },
		 { id: 3, name: 'jack', pid: 13 },
		{ id: 4, name: 'john', pid: 23 },
		{ id: 5, name: 'boss2', pid: 0 }]
	
	const sum = useMemo(() => num+count,[num,count])
	
	
	
	
		useEffect(() => {
			console.log("count")
	 },[])
		useEffect(() => {
		let timer = setTimeout(() => {
			console.log("哈哈哈哈")
		}, 1000)
			return clearTimeout(timer)
		
	 })

		useEffect(() => {
			console.log("setNum")
		
	 },[num])

	return (
		<div className="card content-box">
			<Form form={form} name="control-hooks" onFinish={onFinish} labelCol={{ span: 1 }}>
				<Form.Item name="user" label="User">
					<Input placeholder="Please enter a user" />
				</Form.Item>
				<Form.Item name="note" label="Note">
					<Input placeholder="Please enter a user note" />
				</Form.Item>
				<Form.Item name="gender" label="Gender">
					<Select placeholder="Select a option and change input text above" onChange={onGenderChange} allowClear>
						<Option value="male">male</Option>
						<Option value="female">female</Option>
						<Option value="other">other</Option>
					</Select>
				</Form.Item>
				<Form.Item wrapperCol={{ offset: 1 }}>
					<Space>
						<Button type="primary" htmlType="submit">
							Submit
						</Button>
						<Button htmlType="button" onClick={onReset}>
							Reset
						</Button>
						<Button type="link" htmlType="button" onClick={onFill}>
							Fill form
						</Button>{" "}
					</Space>
				</Form.Item>
			</Form>

			<div className="mytest">
				<div>		number:{num} </div>
				<div>   count:{ count} </div>
				
				<div>
					<Button type="primary" onClick={() => { setNum(num + 1) }}>
						修改 number
					</Button>
				</div>
				<div>
					<Button type="primary" onClick={() => { setCount(count + 1) }}>
							修改 count </Button>
				</div>

				<div style={{ display: show ?'block':'none'}}> 我是大佬 </div>  

				 {show ? <div > 我是大佬 </div> : <div > 我是菜鸡 </div>  }
					<div>
					<Button type="primary" onClick={() => { setShow(!show) }}>
							切换显示 隐藏 </Button>
				</div>
				<div > 计算属性：sum===={ sum}</div>
				<div></div>
				<div></div>
				<div>列表渲染如下：</div>
				<ul>
					{arr.map(({ id, name , pid }, i) => { 
						return <li key={id + name} >{id}-----&gt;{pid }</li>
					})}
					</ul>


			</div>

		</div>

	
	);
};

export default BasicForm;
