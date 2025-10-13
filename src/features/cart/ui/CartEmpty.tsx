import { MoveLeft } from "lucide-react";
import {useCartStore} from "../model/hooks/store.ts";
import {Button} from "../../../shared/components/Button";

export const CartEmpty = () => {
	const close = useCartStore((s) => s.close);
	return (
		<div className={"flex size-full items-center justify-center"}>
			<div className={"flex w-[300px] flex-col items-center gap-6"}>
				<img src="/empty-cart.png" alt="" width={120} height={120} />
				<div>
					<div className={"text-center text-[22px] font-semibold"}>
						Корзина пустая
					</div>
					<p className={"text-muted text-center text-base"}>
						Добавьте хотя бы одну пиццу, чтобы совершить заказ
					</p>
				</div>
				<Button
					color="primary"
					className={"w-full"}
					onClick={close}
				>
					<MoveLeft />
					Назад
				</Button>
			</div>
		</div>
	);
};
